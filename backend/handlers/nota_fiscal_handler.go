package handlers

import (
	"database/sql"
	"net/http"

	"Emissao_de_notas_fiscais/backend/models"
	"Emissao_de_notas_fiscais/database"

	"github.com/gin-gonic/gin"
)

// GET /notas-fiscais
func ListarNotas(c *gin.Context) {
	rows, err := database.DB.Query("SELECT id, numero, status FROM notas_fiscais ORDER BY numero DESC")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}
	defer rows.Close()

	notas := []models.NotaFiscal{}
	for rows.Next() {
		var n models.NotaFiscal
		if err := rows.Scan(&n.ID, &n.Numero, &n.Status); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
			return
		}
		notas = append(notas, n)
	}
	c.JSON(http.StatusOK, notas)
}

// GET /notas-fiscais/:id  -> nota com os itens
func BuscarNota(c *gin.Context) {
	id := c.Param("id")

	var n models.NotaFiscal
	err := database.DB.QueryRow("SELECT id, numero, status FROM notas_fiscais WHERE id = ?", id).
		Scan(&n.ID, &n.Numero, &n.Status)
	if err == sql.ErrNoRows {
		c.JSON(http.StatusNotFound, gin.H{"erro": "Nota não encontrada"})
		return
	} else if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}

	rows, err := database.DB.Query(`
		SELECT i.produto_id, p.codigo, p.descricao, i.quantidade
		FROM nota_fiscal_itens i
		JOIN produtos p ON p.id = i.produto_id
		WHERE i.nota_fiscal_id = ?`, id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}
	defer rows.Close()

	itens := []models.ItemNotaDetalhado{}
	for rows.Next() {
		var it models.ItemNotaDetalhado
		rows.Scan(&it.ProdutoID, &it.Codigo, &it.Descricao, &it.Quantidade)
		itens = append(itens, it)
	}
	n.Itens = itens

	c.JSON(http.StatusOK, n)
}

// POST /notas-fiscais  -> cria nota com status Aberta e numeração sequencial
func CriarNota(c *gin.Context) {
	var nova models.NovaNotaFiscal
	if err := c.ShouldBindJSON(&nova); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"erro": "É necessário incluir ao menos um produto: " + err.Error()})
		return
	}

	tx, err := database.DB.Begin()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}

	// Próximo número sequencial
	var proximoNumero int
	err = tx.QueryRow("SELECT COALESCE(MAX(numero), 0) + 1 FROM notas_fiscais").Scan(&proximoNumero)
	if err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}

	result, err := tx.Exec("INSERT INTO notas_fiscais (numero, status) VALUES (?, 'Aberta')", proximoNumero)
	if err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}
	notaID, _ := result.LastInsertId()

	for _, item := range nova.Itens {
		_, err = tx.Exec(
			"INSERT INTO nota_fiscal_itens (nota_fiscal_id, produto_id, quantidade) VALUES (?, ?, ?)",
			notaID, item.ProdutoID, item.Quantidade,
		)
		if err != nil {
			tx.Rollback()
			c.JSON(http.StatusInternalServerError, gin.H{"erro": "Erro ao incluir item: " + err.Error()})
			return
		}
	}

	if err := tx.Commit(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"id":     notaID,
		"numero": proximoNumero,
		"status": "Aberta",
	})
}

// POST /notas-fiscais/:id/imprimir
// Regras: só imprime se status == Aberta; ao final, status -> Fechada
// e o saldo de cada produto é decrementado pela quantidade usada na nota.
func ImprimirNota(c *gin.Context) {
	id := c.Param("id")

	tx, err := database.DB.Begin()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}

	var status string
	err = tx.QueryRow("SELECT status FROM notas_fiscais WHERE id = ? FOR UPDATE", id).Scan(&status)
	if err == sql.ErrNoRows {
		tx.Rollback()
		c.JSON(http.StatusNotFound, gin.H{"erro": "Nota não encontrada"})
		return
	} else if err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}

	if status != "Aberta" {
		tx.Rollback()
		c.JSON(http.StatusConflict, gin.H{"erro": "Somente notas com status Aberta podem ser impressas"})
		return
	}

	rows, err := tx.Query("SELECT produto_id, quantidade FROM nota_fiscal_itens WHERE nota_fiscal_id = ?", id)
	if err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}

	type itemQtd struct {
		produtoID  int
		quantidade int
	}
	var itens []itemQtd
	for rows.Next() {
		var it itemQtd
		rows.Scan(&it.produtoID, &it.quantidade)
		itens = append(itens, it)
	}
	rows.Close()

	// valida saldo suficiente antes de abater
	for _, it := range itens {
		var saldoAtual int
		err = tx.QueryRow("SELECT saldo FROM produtos WHERE id = ? FOR UPDATE", it.produtoID).Scan(&saldoAtual)
		if err != nil {
			tx.Rollback()
			c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
			return
		}
		if saldoAtual < it.quantidade {
			tx.Rollback()
			c.JSON(http.StatusBadRequest, gin.H{"erro": "Saldo insuficiente para o produto ID " + string(rune(it.produtoID))})
			return
		}
	}

	// abate saldo (saldo = saldo - quantidade)
	for _, it := range itens {
		_, err = tx.Exec("UPDATE produtos SET saldo = saldo - ? WHERE id = ?", it.quantidade, it.produtoID)
		if err != nil {
			tx.Rollback()
			c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
			return
		}
	}

	// fecha a nota
	_, err = tx.Exec("UPDATE notas_fiscais SET status = 'Fechada', fechada_em = NOW() WHERE id = ?", id)
	if err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}

	if err := tx.Commit(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"mensagem": "Nota impressa e fechada com sucesso", "status": "Fechada"})
}
