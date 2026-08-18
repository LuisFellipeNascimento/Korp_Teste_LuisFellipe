import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
let ProdutosComponent = class ProdutosComponent {
    produtoService;
    produtos = [];
    novoProduto = { codigo: '', descricao: '', saldo: 0 };
    erro = '';
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    ngOnInit() {
        this.carregar();
    }
    carregar() {
        this.produtoService.listar().subscribe({
            next: (dados) => (this.produtos = dados),
            error: () => (this.erro = 'Erro ao carregar produtos. Verifique se o backend está rodando.')
        });
    }
    salvar() {
        if (!this.novoProduto.codigo || !this.novoProduto.descricao) {
            this.erro = 'Código e descrição são obrigatórios.';
            return;
        }
        this.erro = '';
        this.produtoService.criar(this.novoProduto).subscribe({
            next: () => {
                this.novoProduto = { codigo: '', descricao: '', saldo: 0 };
                this.carregar();
            },
            error: (e) => (this.erro = e.error?.erro || 'Erro ao salvar produto.')
        });
    }
    excluir(id) {
        if (!id)
            return;
        this.produtoService.excluir(id).subscribe(() => this.carregar());
    }
};
ProdutosComponent = __decorate([
    Component({
        selector: 'app-produtos',
        standalone: true,
        imports: [CommonModule, FormsModule],
        templateUrl: './produtos.html',
        styleUrl: './produtos.css',
    })
], ProdutosComponent);
export { ProdutosComponent };
