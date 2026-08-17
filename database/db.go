package database

import (
	"database/sql"
	"fmt"
	"log"
    "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func Connect() {
	// usuário:senha@tcp(host:porta)/banco
	dsn := "appnf:appnf123@tcp(127.0.0.1:3306)/notas_fiscais_db?parseTime=true&charset=utf8mb4"

	var err error
	DB, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("Erro ao abrir conexão com o banco:", err)
	}

	if err = DB.Ping(); err != nil {
		log.Fatal("Erro ao conectar ao MySQL (verifique se o WampServer está ligado):", err)
	}

	fmt.Println("Conectado ao MySQL com sucesso!")
}