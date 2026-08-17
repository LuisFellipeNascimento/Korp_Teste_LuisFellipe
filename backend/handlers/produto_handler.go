package handlers

import (
	"net/http"

	"Emissao_de_notas_fiscais/backend/database"
	"Emissao_de_notas_fiscais/backend/models"

	"github.com/gin-gonic/gin"
)

// GET /produtos
func ListarProdutos(c *gin.Context) {
	rows, err := database.DB.Query("SELECT id, codigo, descricao, saldo FROM produtos ORDER BY id DESC")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}
	defer rows.Close()

	produtos := []models.Produto{}
	for rows.Next() {
		var p models.Produto
		if err := rows.Scan(&p.ID, &p.Codigo, &p.Descricao, &p.Saldo); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
			return
		}
		produtos = append(produtos, p)
	}

	c.JSON(http.StatusOK, produtos)
}

// POST /produtos
func CriarProduto(c *gin.Context) {
	var p models.Produto
	if err := c.ShouldBindJSON(&p); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"erro": "Código e descrição são obrigatórios: " + err.Error()})
		return
	}

	result, err := database.DB.Exec(
		"INSERT INTO produtos (codigo, descricao, saldo) VALUES (?, ?, ?)",
		p.Codigo, p.Descricao, p.Saldo,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"erro": "Não foi possível salvar (código já existe?): " + err.Error()})
		return
	}

	id, _ := result.LastInsertId()
	p.ID = int(id)
	c.JSON(http.StatusCreated, p)
}

// PUT /produtos/:id
func AtualizarProduto(c *gin.Context) {
	id := c.Param("id")
	var p models.Produto
	if err := c.ShouldBindJSON(&p); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"erro": err.Error()})
		return
	}

	_, err := database.DB.Exec(
		"UPDATE produtos SET codigo = ?, descricao = ?, saldo = ? WHERE id = ?",
		p.Codigo, p.Descricao, p.Saldo, id,
	)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"mensagem": "Produto atualizado"})
}

// DELETE /produtos/:id
func ExcluirProduto(c *gin.Context) {
	id := c.Param("id")
	_, err := database.DB.Exec("DELETE FROM produtos WHERE id = ?", id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"erro": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"mensagem": "Produto excluído"})
}