import { Component, afterNextRender, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProdutoService } from '../../services/produto.service';
import { NotaFiscalService } from '../../services/nota-fiscal.service';
import { jsPDF } from 'jspdf';
import { Produto, ItemNota, NotaFiscal } from '../../models/models';

@Component({
  selector: 'app-nota-fiscal-nova',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
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

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 10;
      let y = margin;

      // ===== CABEÇALHO NFE =====
      doc.setFillColor(255, 255, 255);
      doc.rect(0, 0, pageWidth, 22, 'F');
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.5);
      doc.rect(0, 0, pageWidth, 22, 'D');

      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.text('NOTA FISCAL', margin, 12);

      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 100, 100);
      doc.text('Nota Fiscal Eletrônica', margin, 18);

      // Número da nota e série
      const notaNumero = this.notas.length > 0 ? this.notas[this.notas.length - 1].numero + 1 : 1;
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.text(`Nº ${notaNumero.toString().padStart(3, '0')}`, pageWidth - margin, 10, { align: 'right' });
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.text('Série: 1', pageWidth - margin, 16, { align: 'right' });

      y = 26;

      // ===== EMISSOR E DESTINATÁRIO =====
      const colWidth = (pageWidth - 2 * margin) / 2;

      // Emissor
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.3);
      doc.rect(margin, y, colWidth, 38, 'D');
      doc.setFontSize(7);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.text('EMISSOR', margin + 3, y + 5);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6);
      doc.text('Razão Social: Sistema de Emissão de Notas Fiscais Ltda', margin + 3, y + 9);
      doc.text('CNPJ: 12.345.678/0001-90', margin + 3, y + 13);
      doc.text('Endereço: Rua das Notas, 123 - Centro', margin + 3, y + 17);
      doc.text('Cidade: São Paulo - SP', margin + 3, y + 21);
      doc.text('CEP: 01000-000', margin + 3, y + 25);
      doc.text('Telefone: (11) 3000-0000', margin + 3, y + 29);
      doc.text('Email: contato@notafiscal.com', margin + 3, y + 33);

      // Destinatário
      doc.rect(margin + colWidth, y, colWidth, 38, 'D');
      doc.setFontSize(7);
      doc.setFont('helvetica', 'bold');
      doc.text('DESTINATÁRIO', margin + colWidth + 3, y + 5);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6);
      doc.text('Razão Social: Cliente Exemplo Ltda', margin + colWidth + 3, y + 9);
      doc.text('CNPJ/CPF: 98.765.432/0001-10', margin + colWidth + 3, y + 13);
      doc.text('Endereço: Av. do Cliente, 456 - Bairro', margin + colWidth + 3, y + 17);
      doc.text('Cidade: Rio de Janeiro - RJ', margin + colWidth + 3, y + 21);
      doc.text('CEP: 20000-000', margin + colWidth + 3, y + 25);
      doc.text('Inscrição Estadual: 123.456.789.012', margin + colWidth + 3, y + 29);
      doc.text('Email: cliente@exemplo.com', margin + colWidth + 3, y + 33);

      y += 42;

      // ===== DETALHES DA NOTA =====
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.3);
      doc.rect(margin, y, pageWidth - 2 * margin, 16, 'D');
      doc.setFontSize(6);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
      const dataEmissao = new Date();
      doc.text(`Data de Emissão: ${dataEmissao.toLocaleDateString('pt-BR')}`, margin + 3, y + 5);
      doc.text(`Hora: ${dataEmissao.toLocaleTimeString('pt-BR')}`, margin + 3, y + 10);
      doc.text(`Forma de Emissão: Normal`, margin + 50, y + 5);
      doc.text(`Finalidade: NFe normal`, margin + 50, y + 10);
      doc.text(`Consumidor Final: Sim`, margin + 95, y + 5);
      doc.text(`Presença do Cliente: 01 - Presencial`, margin + 95, y + 10);

      y += 18;

      // ===== TABELA DE PRODUTOS =====
      const tableTop = y;
      const tableWidth = pageWidth - 2 * margin;
      const rowHeight = 8;

      // Cabeçalho da tabela
      doc.setFillColor(200, 200, 200);
      doc.rect(margin, tableTop, tableWidth, rowHeight, 'F');
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.3);
      doc.rect(margin, tableTop, tableWidth, rowHeight, 'D');

      doc.setFontSize(6);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.text('Item', margin + 2, tableTop + 5);
      doc.text('Código', margin + 10, tableTop + 5);
      doc.text('Descrição', margin + 30, tableTop + 5);
      doc.text('Qtd', margin + 110, tableTop + 5);
      doc.text('Un', margin + 125, tableTop + 5);
      doc.text('Valor Unit', margin + 135, tableTop + 5);
      doc.text('Valor Total', margin + 165, tableTop + 5);

      y = tableTop + rowHeight;

      // Linhas dos itens
      let totalGeral = 0;
      this.itens.forEach((item, index) => {
        const produto = this.produtos.find((p) => p.id === item.produto_id);
        const codigo = produto ? produto.codigo : '-';
        const descricao = produto ? produto.descricao : 'Produto';
        const qtd = item.quantidade;
        const valorUnit = Math.random() * 100 + 10;
        const valorTotal = qtd * valorUnit;
        totalGeral += valorTotal;

        // Alternar cor de fundo
        if (index % 2 === 0) {
          doc.setFillColor(245, 245, 245);
          doc.rect(margin, y, tableWidth, rowHeight, 'F');
        }
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.2);
        doc.rect(margin, y, tableWidth, rowHeight, 'D');

        doc.setFontSize(6);
        doc.setTextColor(0, 0, 0);
        doc.setFont('helvetica', 'normal');
        doc.text((index + 1).toString(), margin + 2, y + 5);
        doc.text(codigo, margin + 10, y + 5);
        doc.text(descricao, margin + 30, y + 5);
        doc.text(qtd.toString(), margin + 110, y + 5);
        doc.text('un', margin + 125, y + 5);
        doc.text(`R$ ${valorUnit.toFixed(2).replace('.', ',')}`, margin + 135, y + 5);
        doc.text(`R$ ${valorTotal.toFixed(2).replace('.', ',')}`, margin + 165, y + 5);

        y += rowHeight;
      });

      // ===== TOTAIS =====
      y += 2;
      const totalWidth = pageWidth - 2 * margin;
      const totalCol1 = totalWidth * 0.55;
      const totalCol2 = totalWidth * 0.2;
      const totalCol3 = totalWidth * 0.25;

      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.3);
      doc.rect(margin, y, totalCol1, 6, 'D');
      doc.rect(margin + totalCol1, y, totalCol2, 6, 'D');
      doc.rect(margin + totalCol1 + totalCol2, y, totalCol3, 6, 'D');

      doc.setFontSize(6);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
      doc.text('Base de Cálculo do ICMS', margin + 2, y + 4);
      doc.text('Alíquota ICMS', margin + totalCol1 + 2, y + 4);
      doc.text('R$ 0,00', margin + totalCol1 + totalCol2 + 2, y + 4);

      y += 6;
      doc.rect(margin, y, totalCol1, 6, 'D');
      doc.rect(margin + totalCol1, y, totalCol2, 6, 'D');
      doc.rect(margin + totalCol1 + totalCol2, y, totalCol3, 6, 'D');
      doc.text('Valor do ICMS', margin + 2, y + 4);
      doc.text('Alíquota IPI', margin + totalCol1 + 2, y + 4);
      doc.text('R$ 0,00', margin + totalCol1 + totalCol2 + 2, y + 4);

      y += 6;
      doc.rect(margin, y, totalCol1, 6, 'D');
      doc.rect(margin + totalCol1, y, totalCol2, 6, 'D');
      doc.rect(margin + totalCol1 + totalCol2, y, totalCol3, 6, 'D');
      doc.text('Valor do IPI', margin + 2, y + 4);
      doc.text('Alíquota PIS', margin + totalCol1 + 2, y + 4);
      doc.text('R$ 0,00', margin + totalCol1 + totalCol2 + 2, y + 4);

      y += 6;
      doc.rect(margin, y, totalCol1, 6, 'D');
      doc.rect(margin + totalCol1, y, totalCol2, 6, 'D');
      doc.rect(margin + totalCol1 + totalCol2, y, totalCol3, 6, 'D');
      doc.text('Valor do PIS', margin + 2, y + 4);
      doc.text('Alíquota COFINS', margin + totalCol1 + 2, y + 4);
      doc.text('R$ 0,00', margin + totalCol1 + totalCol2 + 2, y + 4);

      y += 6;
      doc.rect(margin, y, totalCol1, 6, 'D');
      doc.rect(margin + totalCol1, y, totalCol2, 6, 'D');
      doc.rect(margin + totalCol1 + totalCol2, y, totalCol3, 6, 'D');
      doc.text('Valor do COFINS', margin + 2, y + 4);
      doc.setFont('helvetica', 'bold');
      doc.text('VALOR TOTAL', margin + totalCol1 + 2, y + 4);
      doc.setFont('helvetica', 'normal');
      doc.text(`R$ ${totalGeral.toFixed(2).replace('.', ',')}`, margin + totalCol1 + totalCol2 + 2, y + 4);

      y += 8;

      // ===== IMPOSTOS =====
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.3);
      doc.rect(margin, y, tableWidth, 20, 'D');
      doc.setFontSize(6);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.text('IMPOSTOS', margin + 3, y + 4);
      doc.setFont('helvetica', 'normal');
      doc.text('ICMS: R$ 0,00', margin + 3, y + 9);
      doc.text('IPI: R$ 0,00', margin + 3, y + 14);
      doc.text('PIS: R$ 0,00', margin + 50, y + 9);
      doc.text('COFINS: R$ 0,00', margin + 50, y + 14);
      doc.text('Total de Impostos: R$ 0,00', margin + 95, y + 9);
      doc.text('Valor Aproximado de Tributos: R$ 0,00', margin + 95, y + 14);

      y += 22;

      // ===== INFORMAÇÕES ADICIONAIS =====
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.3);
      doc.rect(margin, y, tableWidth, 16, 'D');
      doc.setFontSize(6);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.text('INFORMAÇÕES ADICIONAIS', margin + 3, y + 4);
      doc.setFont('helvetica', 'normal');
      doc.text('Chave de Acesso: 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000 0000', margin + 3, y + 9);
      doc.text('Consulta: www.gov.br/nfce - Via Eletrônica', margin + 3, y + 13);

      y += 18;

      // ===== RODAPÉ =====
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.3);
      doc.rect(margin, y, tableWidth, 10, 'D');
      doc.setFontSize(6);
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'normal');
      doc.text(`Emitido em: ${new Date().toLocaleString('pt-BR')}`, margin + 3, y + 4);
      doc.text('Sistema de Emissão de Notas Fiscais', pageWidth / 2, y + 4, { align: 'center' });
      doc.text('Página 1/1', pageWidth - margin - 10, y + 4, { align: 'right' });

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
