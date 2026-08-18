package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	// Conectar ao MySQL
	dsn := "root:@tcp(127.0.0.1:3306)/notas_fiscais_db?parseTime=true&charset=utf8mb4"
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("Erro ao conectar:", err)
	}
	defer db.Close()

	if err := db.Ping(); err != nil {
		log.Fatal("Erro ao fazer ping no banco:", err)
	}

	fmt.Println("Conectado ao banco de dados!")

	// Inserir produtos de teste
	produtos := []struct {
		codigo    string
		descricao string
		saldo     int
	}{
		{"P-001", "Teclado Mecânico RGB", 15},
		{"P-002", "Mouse Gamer Wireless", 28},
		{"P-003", "Monitor 27\" 144Hz", 8},
		{"P-004", "Headset Profissional", 12},
		{"P-005", "Mousepad Grande", 45},
		{"P-006", "Webcam 1080P", 20},
		{"P-007", "Hub USB 3.0 7 Portas", 18},
		{"P-008", "Suporte Para Monitor", 35},
	}

	for _, p := range produtos {
		_, err := db.Exec(
			"INSERT IGNORE INTO produtos (codigo, descricao, saldo) VALUES (?, ?, ?)",
			p.codigo, p.descricao, p.saldo,
		)
		if err != nil {
			log.Printf("Erro ao inserir %s: %v\n", p.codigo, err)
		} else {
			fmt.Printf("✓ Produto %s inserido/verificado\n", p.codigo)
		}
	}

	// Listar produtos
	fmt.Println("\n--- Produtos no banco de dados ---")
	rows, err := db.Query("SELECT id, codigo, descricao, saldo FROM produtos ORDER BY id")
	if err != nil {
		log.Fatal("Erro ao listar produtos:", err)
	}
	defer rows.Close()

	for rows.Next() {
		var id, saldo int
		var codigo, descricao string
		err := rows.Scan(&id, &codigo, &descricao, &saldo)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("ID: %d | Código: %s | Descrição: %s | Saldo: %d\n", id, codigo, descricao, saldo)
	}

	fmt.Println("\n✓ Banco de dados populado com sucesso!")
}
