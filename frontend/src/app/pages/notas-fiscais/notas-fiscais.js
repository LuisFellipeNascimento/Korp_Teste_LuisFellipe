import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
let NotasFiscaisComponent = class NotasFiscaisComponent {
    produtoService;
    notaFiscalService;
    router;
    produtos = [];
    itens = [];
    produtoSelecionadoId = null;
    quantidadeSelecionada = 1;
    erro = '';
    constructor(produtoService, notaFiscalService, router) {
        this.produtoService = produtoService;
        this.notaFiscalService = notaFiscalService;
        this.router = router;
    }
    ngOnInit() {
        this.produtoService.listar().subscribe((dados) => (this.produtos = dados));
    }
    adicionarItem() {
        if (!this.produtoSelecionadoId || this.quantidadeSelecionada <= 0) {
            this.erro = 'Selecione um produto e uma quantidade válida.';
            return;
        }
        this.erro = '';
        this.itens.push({ produto_id: this.produtoSelecionadoId, quantidade: this.quantidadeSelecionada });
        this.produtoSelecionadoId = null;
        this.quantidadeSelecionada = 1;
    }
    removerItem(index) {
        this.itens.splice(index, 1);
    }
    nomeProduto(id) {
        const p = this.produtos.find((x) => x.id === id);
        return p ? `${p.codigo} - ${p.descricao}` : '';
    }
    salvarNota() {
        if (this.itens.length === 0) {
            this.erro = 'Inclua ao menos um produto na nota.';
            return;
        }
        this.notaFiscalService.criar(this.itens).subscribe({
            next: () => this.router.navigate(['/notas-fiscais']),
            error: (e) => (this.erro = e.error?.erro || 'Erro ao criar nota fiscal.')
        });
    }
};
NotasFiscaisComponent = __decorate([
    Component({
        selector: 'app-notas-fiscais',
        standalone: true,
        imports: [CommonModule, FormsModule],
        templateUrl: './notas-fiscais.html',
        styleUrl: './notas-fiscais.css',
    })
], NotasFiscaisComponent);
export { NotasFiscaisComponent };
