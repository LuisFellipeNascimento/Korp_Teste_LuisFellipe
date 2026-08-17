package models

type Produto struct {
	ID        int    `json:"id"`
	Codigo    string `json:"codigo" binding:"required"`
	Descricao string `json:"descricao" binding:"required"`
	Saldo     int    `json:"saldo"`
}