import { Component, afterNextRender, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from '../../models/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  produtos: Produto[] = [];
  carregando = false;
  erro = '';

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
}
