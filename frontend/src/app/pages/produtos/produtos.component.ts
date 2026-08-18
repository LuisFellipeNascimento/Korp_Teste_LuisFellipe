import { Component, afterNextRender, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/models';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class ProdutosComponent {
  produtos: Produto[] = [];
  novoProduto: Produto = { codigo: '', descricao: '', saldo: 0 };
  erro = '';
  editandoId: number | null = null;
  carregando = false;

  constructor(
    private produtoService: ProdutoService,
    private cdr: ChangeDetectorRef
  ) {
    // afterNextRender garante execução apenas no navegador (cliente),
    // mesmo com SSR/hidratação, carregando os produtos automaticamente.
    // As respostas HTTP (assíncronas) não disparam o change detection neste
    // contexto, por isso chamamos cdr.detectChanges() explicitamente.
    afterNextRender(() => {
      this.carregar();
    });
  }

  carregar(): void {
    this.carregando = true;
    this.produtoService.listar().subscribe({
      next: (dados: Produto[]) => {
        this.produtos = dados;
        this.carregando = false;
        this.erro = '';
        this.cdr.detectChanges();
      },
      error: (e: any) => {
        this.carregando = false;
        this.erro = 'Erro ao carregar produtos. Verifique se o backend está rodando.';
        console.error('Erro ao carregar:', e);
        this.cdr.detectChanges();
      },
    });
  }

  resetForm(): void {
    this.novoProduto = { codigo: '', descricao: '', saldo: 0 };
    this.editandoId = null;
    this.erro = '';
    this.cdr.detectChanges();
  }

  salvar(): void {
    if (!this.novoProduto.codigo || !this.novoProduto.descricao) {
      this.erro = 'Código e descrição são obrigatórios.';
      this.cdr.detectChanges();
      return;
    }

    const payload: Produto = {
      ...this.novoProduto,
      saldo: Number(this.novoProduto.saldo) || 0,
    };

    const operacao = this.editandoId !== null
      ? this.produtoService.atualizar(this.editandoId, payload)
      : this.produtoService.criar(payload);

    operacao.subscribe({
      next: () => {
        this.resetForm();
        this.carregar();
      },
      error: (e: any) => {
        this.erro = e.error?.erro || 'Erro ao salvar produto.';
        this.cdr.detectChanges();
      }
    });
  }

  editar(produto: Produto): void {
    this.editandoId = produto.id ?? null;
    this.novoProduto = {
      ...produto,
      codigo: produto.codigo,
      descricao: produto.descricao,
      saldo: produto.saldo ?? 0,
    };
    this.erro = '';
    this.cdr.detectChanges();
  }

  cancelarEdicao(): void {
    this.resetForm();
  }

  excluir(id?: number): void {
    if (!id) return;
    this.produtoService.excluir(id).subscribe({
      next: () => this.carregar(),
      error: (e: any) => {
        this.erro = e.error?.erro || 'Erro ao excluir produto.';
        this.cdr.detectChanges();
      }
    });
  }
}
