import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { NotaFiscalService } from '../../services/nota-fiscal.service';
import { Produto, ItemNota } from '../../models/models';

@Component({
  selector: 'app-notas-fiscais',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notas-fiscais.html',
  styleUrl: './notas-fiscais.css',
})
export class NotasFiscaisComponent implements OnInit {
  produtos: Produto[] = [];
  itens: ItemNota[] = [];
  produtoSelecionadoId: number | null = null;
  quantidadeSelecionada = 1;
  erro = '';

  constructor(
    private produtoService: ProdutoService,
    private notaFiscalService: NotaFiscalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.produtoService.listar().subscribe((dados) => (this.produtos = dados));
  }

  adicionarItem(): void {
    if (!this.produtoSelecionadoId || this.quantidadeSelecionada <= 0) {
      this.erro = 'Selecione um produto e uma quantidade válida.';
      return;
    }
    this.erro = '';
    this.itens.push({ produto_id: this.produtoSelecionadoId, quantidade: this.quantidadeSelecionada });
    this.produtoSelecionadoId = null;
    this.quantidadeSelecionada = 1;
  }

  removerItem(index: number): void {
    this.itens.splice(index, 1);
  }

  nomeProduto(id: number): string {
    const p = this.produtos.find((x) => x.id === id);
    return p ? `${p.codigo} - ${p.descricao}` : '';
  }

  salvarNota(): void {
    if (this.itens.length === 0) {
      this.erro = 'Inclua ao menos um produto na nota.';
      return;
    }
    this.notaFiscalService.criar(this.itens).subscribe({
      next: () => this.router.navigate(['/notas-fiscais']),
      error: (e) => (this.erro = e.error?.erro || 'Erro ao criar nota fiscal.')
    });
  }
}