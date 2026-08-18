export interface Produto {
  id?: number;
  codigo: string;
  descricao: string;
  saldo: number;
}

export interface ItemNota {
  produto_id: number;
  quantidade: number;
}

export interface NotaFiscal {
  id: number;
  numero: number;
  status: 'Aberta' | 'Fechada';
  itens?: ItemNotaDetalhado[];
}

export interface ItemNotaDetalhado {
  produto_id: number;
  codigo: string;
  descricao: string;
  quantidade: number;
}