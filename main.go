package main

import (
	"Emissao_de_notas_fiscais/backend/handlers"
	"Emissao_de_notas_fiscais/database"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	database.Connect()

	r := gin.Default()

	// Libera acesso do Angular (http://localhost:4200)
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:4200"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	produtos := r.Group("/produtos")
	{
		produtos.GET("", handlers.ListarProdutos)
		produtos.POST("", handlers.CriarProduto)
		produtos.PUT("/:id", handlers.AtualizarProduto)
		produtos.DELETE("/:id", handlers.ExcluirProduto)
	}

	notas := r.Group("/notas-fiscais")
	{
		notas.GET("", handlers.ListarNotas)
		notas.GET("/:id", handlers.BuscarNota)
		notas.POST("", handlers.CriarNota)
		notas.POST("/:id/imprimir", handlers.ImprimirNota)
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8081"
	}

	r.Run(":" + port)
}
