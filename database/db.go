package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"strings"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

const (
	databaseName = "notas_fiscais_db"
	appUser      = "root"
	appPassword  = ""
)

func Connect() {
	DB = openDB(buildDSN(appUser, appPassword, databaseName))
	if DB == nil {
		log.Fatal("Não foi possível abrir a conexão com o MySQL.")
	}

	if err := DB.Ping(); err != nil {
		log.Printf("Falha ao conectar com o usuário %s: %v. Tentando criar o usuário e banco automaticamente...\n", appUser, err)
		ensureLocalDatabase()
		DB = openDB(buildDSN(appUser, appPassword, databaseName))
		if DB == nil {
			log.Fatal("Não foi possível conectar ao MySQL após a tentativa de correção automática.")
		}
		if err := DB.Ping(); err != nil {
			log.Fatal("Erro ao conectar ao MySQL (verifique se o WampServer está ligado):", err)
		}
	}

	ensureSchema()
	fmt.Println("Conectado ao MySQL com sucesso!")
}

func buildDSN(user, password, dbName string) string {
	return fmt.Sprintf("%s:%s@tcp(127.0.0.1:3306)/%s?parseTime=true&charset=utf8mb4&multiStatements=true", user, password, dbName)
}

func openDB(dsn string) *sql.DB {
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Printf("sql.Open falhou para DSN %s: %v\n", dsn, err)
		return nil
	}
	return db
}

func ensureLocalDatabase() {
	rootDSN := "root@tcp(127.0.0.1:3306)/?parseTime=true&charset=utf8mb4&multiStatements=true"
	rootDB, err := sql.Open("mysql", rootDSN)
	if err != nil {
		log.Fatal("Não foi possível abrir conexão root para corrigir o banco:", err)
	}
	defer rootDB.Close()

	if err := rootDB.Ping(); err != nil {
		log.Fatal("Não foi possível conectar como root no MySQL local. Verifique se o WampServer está ativo e se o usuário root está disponível:", err)
	}

	statements := []string{
		fmt.Sprintf("CREATE DATABASE IF NOT EXISTS `%s` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci", databaseName),
		fmt.Sprintf("CREATE USER IF NOT EXISTS '%s'@'127.0.0.1' IDENTIFIED BY '%s'", appUser, appPassword),
		fmt.Sprintf("CREATE USER IF NOT EXISTS '%s'@'localhost' IDENTIFIED BY '%s'", appUser, appPassword),
		fmt.Sprintf("ALTER USER '%s'@'127.0.0.1' IDENTIFIED WITH mysql_native_password BY '%s'", appUser, appPassword),
		fmt.Sprintf("ALTER USER '%s'@'localhost' IDENTIFIED WITH mysql_native_password BY '%s'", appUser, appPassword),
		fmt.Sprintf("GRANT ALL PRIVILEGES ON `%s`.* TO '%s'@'127.0.0.1'", databaseName, appUser),
		fmt.Sprintf("GRANT ALL PRIVILEGES ON `%s`.* TO '%s'@'localhost'", databaseName, appUser),
		"FLUSH PRIVILEGES",
	}

	for _, stmt := range statements {
		if _, err := rootDB.Exec(stmt); err != nil {
			log.Printf("Aviso: falha ao executar SQL de correção: %s\nErro: %v\n", stmt, err)
		}
	}
}

func ensureSchema() {
	if DB == nil {
		return
	}

	filePath := "./database/notas_fiscais_db.sql"
	content, err := os.ReadFile(filePath)
	if err != nil {
		log.Printf("Arquivo de schema não encontrado em %s: %v\n", filePath, err)
		return
	}

	sqlScript := strings.TrimSpace(string(content))
	if sqlScript == "" {
		return
	}

	if _, err := DB.Exec(sqlScript); err != nil {
		log.Printf("Aviso: não foi possível aplicar o schema automaticamente: %v\n", err)
	}
}
