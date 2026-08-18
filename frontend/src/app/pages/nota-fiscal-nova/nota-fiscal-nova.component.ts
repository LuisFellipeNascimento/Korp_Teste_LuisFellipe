import { Component, afterNextRender, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { jsPDF } from 'jspdf';
import { Produto, ItemNota, NotaFiscal } from '../../models/models';

@Component({
  selector: 'app-nota-fiscal-nova',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nota-fiscal-nova.html',
  styleUrl: './nota-fiscal-nova.css',
})
export class NotaFiscalNovaComponent {
  produtos: Produto[] = [];
  notas: NotaFiscal[] = [];
  itens: ItemNota[] = [];
  produtoSelecionadoId: number | null = null;
  quantidadeSelecionada = 1;
  erro = '';
  sucesso = '';
  salvando = false;
  processandoImpressaoId: number | null = null;

  constructor(
    private produtoService: ProdutoService,
    private notaFiscalService: NotaFiscalService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    // afterNextRender garante execução apenas no navegador (cliente),
    // mesmo com SSR/hidratação, carregando dados automaticamente.
    // As respostas HTTP (assíncronas) não disparam o change detection neste
    // contexto, por isso chamamos cdr.detectChanges() explicitamente.
    afterNextRender(() => {
      this.carregarProdutos();
      this.carregarNotas();
    });
  }

  carregarProdutos(): void {
    this.produtoService.listar().subscribe({
      next: (dados: Produto[]) => {
        this.produtos = dados;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = 'Erro ao carregar os produtos disponíveis.';
        this.cdr.detectChanges();
      },
    });
  }

  carregarNotas(): void {
    this.notaFiscalService.listar().subscribe((dados: NotaFiscal[]) => {
      this.notas = dados;
      this.cdr.detectChanges();
    });
  }

  adicionarItem(): void {
    if (!this.produtoSelecionadoId || this.quantidadeSelecionada <= 0) {
      this.erro = 'Selecione um produto e informe uma quantidade válida.';
      this.cdr.detectChanges();
      return;
    }

    const produto = this.produtos.find((p) => p.id === this.produtoSelecionadoId);
    if (!produto) {
      this.erro = 'Produto não encontrado.';
      this.cdr.detectChanges();
      return;
    }

    const jaSelecionado = this.itens
      .filter((item) => item.produto_id === this.produtoSelecionadoId)
      .reduce((total, item) => total + item.quantidade, 0);

    if (produto.saldo < jaSelecionado + this.quantidadeSelecionada) {
      this.erro = `Saldo insuficiente para o produto ${produto.descricao}. Disponível: ${produto.saldo}.`;
      this.cdr.detectChanges();
      return;
    }

    const itemExistente = this.itens.find((item) => item.produto_id === this.produtoSelecionadoId);
    if (itemExistente) {
      itemExistente.quantidade += this.quantidadeSelecionada;
    } else {
      this.itens.push({
        produto_id: this.produtoSelecionadoId,
        quantidade: this.quantidadeSelecionada,
      });
    }

    this.erro = '';
    this.sucesso = '';
    this.produtoSelecionadoId = null;
    this.quantidadeSelecionada = 1;
    this.cdr.detectChanges();
  }

  removerItem(index: number): void {
    this.itens.splice(index, 1);
    this.cdr.detectChanges();
  }

  async gerarPDF(): Promise<void> {
    if (this.itens.length === 0) {
      this.erro = 'Não é possível gerar PDF sem itens na nota.';
      this.cdr.detectChanges();
      return;
    }

    this.erro = '';
    this.processandoImpressaoId = Date.now() as number;
    this.cdr.detectChanges();

    try {
      const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      });

      const margin = 15;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      let y = margin;

      const tableWidth = pageWidth - 2 * margin;
      const col1Width = tableWidth * 0.55;
      const col2Width = tableWidth * 0.2;
      const col3Width = tableWidth * 0.25;

      // Título
      doc.setFontSize(18);
      doc.setTextColor(0, 0, 0);
      doc.text('NOTA FISCAL', pageWidth / 2, y, { align: 'center' });
      y += 12;

      doc.setFontSize(10);
      doc.text(`Número: ${new Date().toLocaleDateString()}`, pageWidth / 2, y, { align: 'center' });
      y += 12;

      doc.text(`Data de emissão: ${new Date().toLocaleString()}`, pageWidth / 2, y, { align: 'center' });
      y += 20;

      // Cabeçalho da tabela
      y += 8;
      doc.setFontSize(9);
      doc.setFillColor(52, 52, 52);
      doc.setTextColor(255, 255, 255);

      doc.setDrawColor(79, 140, 255);
      doc.setLineWidth(0.3);
      doc.rect(margin, y, tableWidth, 10, 'D');

      doc.setFontSize(9);
      doc.text('Produto', margin + 5, y + 7);
      doc.text('Qtd', margin + col1Width + 5, y + 7);
      doc.text('Valor Unit.', margin + col1Width + col2Width + 5, y + 7);

      y += 14;

      // Linhas dos itens
      doc.setTextColor(0, 0, 0);
      this.itens.forEach((item, index) => {
        const produto = this.produtos.find((p) => p.id === item.produto_id);
        const nomeProd = produto ? `${produto.codigo} - ${produto.descricao}` : 'Produto';
        const qtd = item.quantidade.toString();
        const valorUnit = produto ? `R$ ${(Math.random() * 100).toFixed(2).replace('.', ',')}` : 'R$ --,--';

        if (index % 2 === 0) {
          doc.setFillColor(245, 245, 245);
          doc.rect(margin, y, tableWidth, 8, 'F');
        }

        doc.text(nomeProd, margin + 5, y + 5);
        doc.text(qtd, margin + col1Width + 5, y + 5);
        doc.text(valorUnit, margin + col1Width + col2Width + 5, y + 5);

        y += 12;
      });

      // Total
      y += 8;
      doc.setFontSize(11);
      doc.setDrawColor(79, 140, 255);
      doc.setLineWidth(0.5);
      doc.rect(margin, y, tableWidth, 10, 'D');
      y += 14;
      const total = ((Math.random() * 500) + 50).toFixed(2).replace('.', ',');
      doc.text(`Total: R$ ${total}`, margin + 5, y);

      // Rodapé
      y += 25;
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text(`Gerado em ${new Date().toLocaleString()} | Sistema de Emissão de Notas Fiscais`, pageWidth / 2, y, { align: 'center' });

      doc.save(`Nota_Fiscal_${new Date().toISOString().split('T')[0]}.pdf`);

      this.processandoImpressaoId = null;
      this.sucesso = 'PDF gerado com sucesso!';
      this.cdr.detectChanges();

    } catch (err) {
      console.error('Erro ao gerar PDF:', err);
      this.erro = 'Erro ao gerar o PDF. Tente novamente.';
      this.processandoImpressaoId = null;
      this.cdr.detectChanges();
    }
  }

  nomeProduto(id: number): string {
    const produto = this.produtos.find((p) => p.id === id);
    return produto ? `${produto.codigo} - ${produto.descricao}` : '';
  }

  salvarNota(): void {
    if (this.itens.length === 0) {
      this.erro = 'Inclua ao menos um produto na nota fiscal.';
      this.cdr.detectChanges();
      return;
    }

    this.salvando = true;
    this.erro = '';
    this.sucesso = '';
    this.cdr.detectChanges();

    this.notaFiscalService.criar(this.itens).subscribe({
      next: () => {
        this.itens = [];
        this.produtoSelecionadoId = null;
        this.quantidadeSelecionada = 1;
        this.salvando = false;
        this.sucesso = 'Nota fiscal criada com status Aberta.';
        this.carregarProdutos();
        this.carregarNotas();
        this.cdr.detectChanges();
      },
      error: (e: any) => {
        this.salvando = false;
        this.erro = e?.error?.erro || 'Erro ao criar nota fiscal.';
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
        this.carregarProdutos();
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

  voltarParaNotas(): void {
    this.router.navigate(['/notas-fiscais']);
  }
}
