import { Component, afterNextRender, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotaFiscalService } from '../../services/nota-fiscal.service';
import { NotaFiscal } from '../../models/models';

@Component({
  selector: 'app-notas-fiscais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notas-fiscais.html',
  styleUrl: './notas-fiscais.css',
})
export class NotasFiscaisComponent {
  notas: NotaFiscal[] = [];
  erro = '';
  sucesso = '';
  processandoImpressaoId: number | null = null;

  constructor(
    private notaFiscalService: NotaFiscalService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    // afterNextRender garante execução apenas no navegador (cliente),
    // mesmo com SSR/hidratação, carregando as notas automaticamente.
    // As respostas HTTP (assíncronas) não disparam o change detection neste
    // contexto, por isso chamamos cdr.detectChanges() explicitamente.
    afterNextRender(() => {
      this.carregarNotas();
    });
  }

  carregarNotas(): void {
    this.notaFiscalService.listar().subscribe({
      next: (dados: NotaFiscal[]) => {
        this.notas = dados;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = 'Erro ao carregar as notas fiscais.';
        this.cdr.detectChanges();
      },
    });
  }

  imprimirNota(nota: NotaFiscal): void {
    if (nota.status !== 'Aberta') {
      this.erro = 'Somente notas com status Aberta podem ser impressas.';
      this.cdr.detectChanges();
      return;
    }

    this.processandoImpressaoId = nota.id;
    this.erro = '';
    this.sucesso = '';
    this.cdr.detectChanges();

    this.notaFiscalService.imprimir(nota.id).subscribe({
      next: (res: any) => {
        this.sucesso = res?.mensagem || 'Nota impressa com sucesso.';
        this.carregarNotas();
      },
      error: (e: any) => {
        this.erro = e?.error?.erro || 'Erro ao imprimir a nota fiscal.';
        this.cdr.detectChanges();
      },
      complete: () => {
        this.processandoImpressaoId = null;
        this.cdr.detectChanges();
      },
    });
  }

  irParaNovaNota(): void {
    this.router.navigate(['/notas-fiscais/nova']);
  }
}
