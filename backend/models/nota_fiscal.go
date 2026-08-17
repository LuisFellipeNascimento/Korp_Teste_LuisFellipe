package models

type ItemNota struct {
	ProdutoID  int `json:"produto_id" binding:"required"`
	Quantidade int `json:"quantidade" binding:"required,gt=0"`
}

type NovaNotaFiscal struct {
	Itens []ItemNota `json:"itens" binding:"required,dive"`
}

type ItemNotaDetalhado struct {
	ProdutoID  int    `json:"produto_id"`
	Codigo     string `json:"codigo"`
	Descricao  string `json:"descricao"`
	Quantidade int    `json:"quantidade"`
}

type NotaFiscal struct {
	ID     int                 `json:"id"`
	Numero int                 `json:"numero"`
	Status string              `json:"status"`
	Itens  []ItemNotaDetalhado `json:"itens"`
}