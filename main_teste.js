import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b ||= {})
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/main.ts
import "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/zone__js.js?v=df08ab4b";
import { bootstrapApplication } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_platform-browser.js?v=df08ab4b";

// src/app/app.config.ts
import { provideZoneChangeDetection } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
import { provideRouter } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_router.js?v=df08ab4b";
import { provideHttpClient } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_common_http.js?v=df08ab4b";

// src/app/pages/home/home.component.ts
import { Component, afterNextRender } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
import { CommonModule } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_common.js?v=df08ab4b";
import { RouterLink } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_router.js?v=df08ab4b";
import * as i02 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";

// src/app/services/produto.service.ts
var produto_service_exports = {};
__export(produto_service_exports, {
  ProdutoService: () => ProdutoService
});

// src/app/services/produto.ts
import { Injectable } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
import { timeout } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/rxjs_operators.js?v=df08ab4b";
import * as i0 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
import * as i1 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_common_http.js?v=df08ab4b";
var ProdutoService = class _ProdutoService {
  constructor(http) {
    this.http = http;
  }
  http;
  apiUrl = "http://localhost:8081/produtos";
  listar() {
    return this.http.get(this.apiUrl).pipe(timeout(1e4));
  }
  criar(produto) {
    return this.http.post(this.apiUrl, produto);
  }
  atualizar(id, produto) {
    return this.http.put(`${this.apiUrl}/${id}`, produto);
  }
  excluir(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function ProdutoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProdutoService)(i0.\u0275\u0275inject(i1.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _ProdutoService, factory: _ProdutoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(ProdutoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i1.HttpClient }], null);
})();

// src/app/pages/home/home.component.ts
import * as i2 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_common.js?v=df08ab4b";
function HomeComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 12);
    i02.\u0275\u0275element(1, "div", 13);
    i02.\u0275\u0275elementStart(2, "p");
    i02.\u0275\u0275text(3, "Carregando produtos...");
    i02.\u0275\u0275elementEnd()();
  }
}
function HomeComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 14);
    i02.\u0275\u0275text(1);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275advance();
    i02.\u0275\u0275textInterpolate1(" ", ctx_r0.erro, " ");
  }
}
function HomeComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 15);
    i02.\u0275\u0275namespaceSVG();
    i02.\u0275\u0275elementStart(1, "svg", 16);
    i02.\u0275\u0275element(2, "path", 17);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275namespaceHTML();
    i02.\u0275\u0275elementStart(3, "h3");
    i02.\u0275\u0275text(4, "Nenhum produto cadastrado");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(5, "p");
    i02.\u0275\u0275text(6, "Comece ");
    i02.\u0275\u0275elementStart(7, "a", 18);
    i02.\u0275\u0275text(8, "criando um novo produto");
    i02.\u0275\u0275elementEnd()()();
  }
}
function HomeComponent_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "span", 23);
    i02.\u0275\u0275text(3);
    i02.\u0275\u0275elementEnd()();
    i02.\u0275\u0275elementStart(4, "div", 24)(5, "h3");
    i02.\u0275\u0275text(6);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(7, "div", 25)(8, "span", 26);
    i02.\u0275\u0275text(9, "Saldo:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(10, "span", 27);
    i02.\u0275\u0275text(11);
    i02.\u0275\u0275elementEnd()()();
    i02.\u0275\u0275elementStart(12, "div", 28)(13, "a", 29);
    i02.\u0275\u0275text(14, "Gerenciar");
    i02.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const produto_r2 = ctx.$implicit;
    i02.\u0275\u0275advance(3);
    i02.\u0275\u0275textInterpolate(produto_r2.codigo);
    i02.\u0275\u0275advance(3);
    i02.\u0275\u0275textInterpolate(produto_r2.descricao);
    i02.\u0275\u0275advance(5);
    i02.\u0275\u0275textInterpolate1("", produto_r2.saldo, " unidade(s)");
  }
}
function HomeComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 19);
    i02.\u0275\u0275template(1, HomeComponent_div_22_div_1_Template, 15, 3, "div", 20);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275advance();
    i02.\u0275\u0275property("ngForOf", ctx_r0.produtos);
  }
}
var HomeComponent = class _HomeComponent {
  constructor(produtoService) {
    this.produtoService = produtoService;
    afterNextRender(() => {
      this.carregar();
    });
  }
  produtoService;
  produtos = [];
  carregando = false;
  erro = "";
  carregar() {
    this.carregando = true;
    this.produtoService.listar().subscribe({
      next: (dados) => {
        this.produtos = dados;
        this.carregando = false;
        this.erro = "";
      },
      error: (e) => {
        this.carregando = false;
        this.erro = "Erro ao carregar produtos. Verifique se o backend est\xE1 rodando.";
        console.error("Erro ao carregar:", e);
      }
    });
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(i02.\u0275\u0275directiveInject(ProdutoService));
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 23, vars: 5, consts: [[1, "home-page"], [1, "hero-section"], [1, "hero-content"], [1, "container"], [1, "section-header"], [1, "actions-group"], ["routerLink", "/notas-fiscais/nova", 1, "btn-add"], ["routerLink", "/produtos", 1, "btn-add"], ["class", "loading", 4, "ngIf"], ["class", "error-banner", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "products-grid", 4, "ngIf"], [1, "loading"], [1, "spinner"], [1, "error-banner"], [1, "empty-state"], ["width", "64", "height", "64", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"], ["routerLink", "/produtos"], [1, "products-grid"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [1, "card-header"], [1, "code-badge"], [1, "card-content"], [1, "stock-info"], [1, "label"], [1, "value"], [1, "card-footer"], ["routerLink", "/produtos", 1, "link-btn"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      i02.\u0275\u0275text(4, "Bem-vindo");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(5, "p");
      i02.\u0275\u0275text(6, "Gerencie seus produtos e notas fiscais de forma eficiente");
      i02.\u0275\u0275elementEnd()()();
      i02.\u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "div")(10, "h2");
      i02.\u0275\u0275text(11, "Produtos Dispon\xEDveis");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(12, "p");
      i02.\u0275\u0275text(13);
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(14, "div", 5)(15, "a", 6);
      i02.\u0275\u0275text(16, "+ Criar Nota Fiscal");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(17, "a", 7);
      i02.\u0275\u0275text(18, "+ Adicionar Produto");
      i02.\u0275\u0275elementEnd()()();
      i02.\u0275\u0275template(19, HomeComponent_div_19_Template, 4, 0, "div", 8)(20, HomeComponent_div_20_Template, 2, 1, "div", 9)(21, HomeComponent_div_21_Template, 9, 0, "div", 10)(22, HomeComponent_div_22_Template, 2, 1, "div", 11);
      i02.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i02.\u0275\u0275advance(13);
      i02.\u0275\u0275textInterpolate1("Total de ", ctx.produtos.length, " produto(s) cadastrado(s)");
      i02.\u0275\u0275advance(6);
      i02.\u0275\u0275property("ngIf", ctx.carregando);
      i02.\u0275\u0275advance();
      i02.\u0275\u0275property("ngIf", ctx.erro);
      i02.\u0275\u0275advance();
      i02.\u0275\u0275property("ngIf", !ctx.carregando && ctx.produtos.length === 0);
      i02.\u0275\u0275advance();
      i02.\u0275\u0275property("ngIf", !ctx.carregando && ctx.produtos.length > 0);
    }
  }, dependencies: [CommonModule, i2.NgClass, i2.NgComponentOutlet, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgStyle, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgPlural, i2.NgPluralCase, RouterLink, i2.AsyncPipe, i2.UpperCasePipe, i2.LowerCasePipe, i2.JsonPipe, i2.SlicePipe, i2.DecimalPipe, i2.PercentPipe, i2.TitleCasePipe, i2.CurrencyPipe, i2.DatePipe, i2.I18nPluralPipe, i2.I18nSelectPipe, i2.KeyValuePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #e5eefb;\n}\n.home-page[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.95) 0%,\n      rgba(30, 41, 59, 0.95) 100%);\n}\n.hero-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #7c3aed);\n  padding: 64px 20px;\n  text-align: center;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  color: white;\n  font-weight: 900;\n  letter-spacing: -0.02em;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 56px 20px 80px;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: clamp(1.8rem, 4vw, 2.4rem);\n  color: #f3f7ff;\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #94a3b8;\n  font-size: 1rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n}\n.actions-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.btn-add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #4f8cff,\n      #7c3aed);\n  color: white;\n  padding: 12px 20px;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.95rem;\n  white-space: nowrap;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: 0 8px 16px rgba(79, 140, 255, 0.28);\n}\n.btn-add[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(79, 140, 255, 0.4);\n}\n.section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #94a3b8;\n  font-size: 1rem;\n}\n.loading[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 20px;\n  background: rgba(15, 23, 42, 0.5);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 20px;\n  color: #cbd5e1;\n}\n.loading[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid rgba(59, 130, 246, 0.2);\n  border-top-color: #3b82f6;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: #94a3b8;\n}\n.empty-state[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #64748b;\n  opacity: 0.6;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #cbd5e1;\n  font-size: 1.3rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.empty-state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #60a5fa;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s ease;\n}\n.empty-state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #93c5fd;\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(248, 113, 113, 0.3);\n  border-radius: 12px;\n  padding: 16px 20px;\n  color: #fca5a5;\n  margin-bottom: 24px;\n  font-weight: 600;\n}\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}\n.product-card[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.72);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease,\n    border-color 0.3s ease;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(96, 165, 250, 0.4);\n  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);\n}\n.card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1),\n      rgba(124, 58, 237, 0.1));\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.12);\n}\n.code-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(59, 130, 246, 0.25);\n  color: #bfdbfe;\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n}\n.card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 20px;\n}\n.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 1.1rem;\n  color: #eef5ff;\n  line-height: 1.4;\n}\n.stock-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n}\n.stock-info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-weight: 600;\n}\n.stock-info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #dbeafe;\n  font-weight: 700;\n}\n.card-footer[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-top: 1px solid rgba(148, 163, 184, 0.12);\n  background: rgba(15, 23, 42, 0.3);\n}\n.link-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #4f8cff,\n      #7c3aed);\n  color: white;\n  padding: 10px 16px;\n  border-radius: 8px;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.9rem;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.link-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(79, 140, 255, 0.3);\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%] {\n    padding: 40px 20px;\n  }\n  .container[_ngcontent-%COMP%] {\n    padding: 32px 20px 60px;\n  }\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .actions-group[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-add[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=home.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, RouterLink], template: '<section class="home-page">\r\n  <div class="hero-section">\r\n    <div class="hero-content">\r\n      <h1>Bem-vindo</h1>\r\n      <p>Gerencie seus produtos e notas fiscais de forma eficiente</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class="container">\r\n    <div class="section-header">\r\n      <div>\r\n        <h2>Produtos Dispon\xEDveis</h2>\r\n        <p>Total de {{ produtos.length }} produto(s) cadastrado(s)</p>\r\n      </div>\r\n      <div class="actions-group">\r\n        <a routerLink="/notas-fiscais/nova" class="btn-add">+ Criar Nota Fiscal</a>\r\n        <a routerLink="/produtos" class="btn-add">+ Adicionar Produto</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf="carregando" class="loading">\r\n      <div class="spinner"></div>\r\n      <p>Carregando produtos...</p>\r\n    </div>\r\n\r\n    <div *ngIf="erro" class="error-banner">\r\n      {{ erro }}\r\n    </div>\r\n\r\n    <div *ngIf="!carregando && produtos.length === 0" class="empty-state">\r\n      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">\r\n        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>\r\n      </svg>\r\n      <h3>Nenhum produto cadastrado</h3>\r\n      <p>Comece <a routerLink="/produtos">criando um novo produto</a></p>\r\n    </div>\r\n\r\n    <div *ngIf="!carregando && produtos.length > 0" class="products-grid">\r\n      <div *ngFor="let produto of produtos" class="product-card">\r\n        <div class="card-header">\r\n          <span class="code-badge">{{ produto.codigo }}</span>\r\n        </div>\r\n        <div class="card-content">\r\n          <h3>{{ produto.descricao }}</h3>\r\n          <div class="stock-info">\r\n            <span class="label">Saldo:</span>\r\n            <span class="value">{{ produto.saldo }} unidade(s)</span>\r\n          </div>\r\n        </div>\r\n        <div class="card-footer">\r\n          <a routerLink="/produtos" class="link-btn">Gerenciar</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n', styles: ['/* src/app/pages/home/home.css */\n:host {\n  display: block;\n  min-height: 100%;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #e5eefb;\n}\n.home-page {\n  min-height: 100%;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(15, 23, 42, 0.95) 0%,\n      rgba(30, 41, 59, 0.95) 100%);\n}\n.hero-section {\n  background:\n    linear-gradient(\n      135deg,\n      #3b82f6,\n      #7c3aed);\n  padding: 64px 20px;\n  text-align: center;\n}\n.hero-content h1 {\n  margin: 0 0 12px 0;\n  font-size: clamp(2rem, 5vw, 3.2rem);\n  color: white;\n  font-weight: 900;\n  letter-spacing: -0.02em;\n}\n.hero-content p {\n  margin: 0;\n  font-size: 1.1rem;\n  color: rgba(255, 255, 255, 0.9);\n}\n.container {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 56px 20px 80px;\n}\n.section-header {\n  margin-bottom: 40px;\n}\n.section-header h2 {\n  margin: 0 0 8px 0;\n  font-size: clamp(1.8rem, 4vw, 2.4rem);\n  color: #f3f7ff;\n}\n.section-header p {\n  margin: 0;\n  color: #94a3b8;\n  font-size: 1rem;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 20px;\n}\n.actions-group {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.btn-add {\n  display: inline-flex;\n  align-items: center;\n  background:\n    linear-gradient(\n      135deg,\n      #4f8cff,\n      #7c3aed);\n  color: white;\n  padding: 12px 20px;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.95rem;\n  white-space: nowrap;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: 0 8px 16px rgba(79, 140, 255, 0.28);\n}\n.btn-add:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 24px rgba(79, 140, 255, 0.4);\n}\n.section-header p {\n  margin: 0;\n  color: #94a3b8;\n  font-size: 1rem;\n}\n.loading,\n.empty-state {\n  text-align: center;\n  padding: 48px 20px;\n  background: rgba(15, 23, 42, 0.5);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 20px;\n  color: #cbd5e1;\n}\n.loading {\n  font-size: 1.05rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n}\n.spinner {\n  width: 48px;\n  height: 48px;\n  border: 4px solid rgba(59, 130, 246, 0.2);\n  border-top-color: #3b82f6;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: #94a3b8;\n}\n.empty-state svg {\n  color: #64748b;\n  opacity: 0.6;\n}\n.empty-state h3 {\n  margin: 0;\n  color: #cbd5e1;\n  font-size: 1.3rem;\n}\n.empty-state p {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.empty-state a {\n  color: #60a5fa;\n  text-decoration: none;\n  font-weight: 600;\n  transition: color 0.2s ease;\n}\n.empty-state a:hover {\n  color: #93c5fd;\n}\n.error-banner {\n  background: rgba(239, 68, 68, 0.1);\n  border: 1px solid rgba(248, 113, 113, 0.3);\n  border-radius: 12px;\n  padding: 16px 20px;\n  color: #fca5a5;\n  margin-bottom: 24px;\n  font-weight: 600;\n}\n.products-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}\n.product-card {\n  background: rgba(15, 23, 42, 0.72);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 16px;\n  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease,\n    border-color 0.3s ease;\n}\n.product-card:hover {\n  transform: translateY(-4px);\n  border-color: rgba(96, 165, 250, 0.4);\n  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);\n}\n.card-header {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(59, 130, 246, 0.1),\n      rgba(124, 58, 237, 0.1));\n  padding: 16px 20px;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.12);\n}\n.code-badge {\n  display: inline-block;\n  background: rgba(59, 130, 246, 0.25);\n  color: #bfdbfe;\n  padding: 6px 12px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n}\n.card-content {\n  flex: 1;\n  padding: 20px;\n}\n.card-content h3 {\n  margin: 0 0 16px 0;\n  font-size: 1.1rem;\n  color: #eef5ff;\n  line-height: 1.4;\n}\n.stock-info {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.95rem;\n}\n.stock-info .label {\n  color: #94a3b8;\n  font-weight: 600;\n}\n.stock-info .value {\n  color: #dbeafe;\n  font-weight: 700;\n}\n.card-footer {\n  padding: 16px 20px;\n  border-top: 1px solid rgba(148, 163, 184, 0.12);\n  background: rgba(15, 23, 42, 0.3);\n}\n.link-btn {\n  display: inline-block;\n  background:\n    linear-gradient(\n      135deg,\n      #4f8cff,\n      #7c3aed);\n  color: white;\n  padding: 10px 16px;\n  border-radius: 8px;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 0.9rem;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.link-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(79, 140, 255, 0.3);\n}\n@media (max-width: 768px) {\n  .hero-section {\n    padding: 40px 20px;\n  }\n  .container {\n    padding: 32px 20px 60px;\n  }\n  .products-grid {\n    grid-template-columns: 1fr;\n  }\n  .section-header {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .actions-group {\n    width: 100%;\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .btn-add {\n    width: 100%;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=home.css.map */\n'] }]
  }], () => [{ type: ProdutoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.component.ts", lineNumber: 14 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fhome%2Fhome.component.ts%40HomeComponent";
  function HomeComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(HomeComponent, m.default, [i02, i2, produto_service_exports], [CommonModule, RouterLink, Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HomeComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && HomeComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/produtos/produtos.component.ts
import { Component as Component2, afterNextRender as afterNextRender2 } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
import { CommonModule as CommonModule2 } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_common.js?v=df08ab4b";
import { FormsModule } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_forms.js?v=df08ab4b";
import * as i03 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
import * as i22 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_common.js?v=df08ab4b";
import * as i3 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_forms.js?v=df08ab4b";
function ProdutosComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i03.\u0275\u0275getCurrentView();
    i03.\u0275\u0275elementStart(0, "button", 19);
    i03.\u0275\u0275listener("click", function ProdutosComponent_button_27_Template_button_click_0_listener() {
      i03.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r1.cancelarEdicao());
    });
    i03.\u0275\u0275text(1, " Cancelar ");
    i03.\u0275\u0275elementEnd();
  }
}
function ProdutosComponent_p_28_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "p", 20);
    i03.\u0275\u0275text(1);
    i03.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275advance();
    i03.\u0275\u0275textInterpolate(ctx_r1.erro);
  }
}
function ProdutosComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "tr")(1, "td", 21)(2, "div", 22);
    i03.\u0275\u0275element(3, "div", 23);
    i03.\u0275\u0275elementStart(4, "span");
    i03.\u0275\u0275text(5, "Carregando produtos...");
    i03.\u0275\u0275elementEnd()()()();
  }
}
function ProdutosComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "tr")(1, "td", 24);
    i03.\u0275\u0275text(2, "Nenhum produto cadastrado");
    i03.\u0275\u0275elementEnd()();
  }
}
function ProdutosComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i03.\u0275\u0275getCurrentView();
    i03.\u0275\u0275elementStart(0, "tr")(1, "td");
    i03.\u0275\u0275text(2);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(3, "td");
    i03.\u0275\u0275text(4);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(5, "td");
    i03.\u0275\u0275text(6);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(7, "td")(8, "div", 25)(9, "button", 26);
    i03.\u0275\u0275listener("click", function ProdutosComponent_tr_48_Template_button_click_9_listener() {
      const p_r4 = i03.\u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r1.editar(p_r4));
    });
    i03.\u0275\u0275text(10, "Editar");
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(11, "button", 27);
    i03.\u0275\u0275listener("click", function ProdutosComponent_tr_48_Template_button_click_11_listener() {
      const p_r4 = i03.\u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r1.excluir(p_r4.id));
    });
    i03.\u0275\u0275text(12, "Excluir");
    i03.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(p_r4.codigo);
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(p_r4.descricao);
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(p_r4.saldo);
  }
}
var ProdutosComponent = class _ProdutosComponent {
  constructor(produtoService) {
    this.produtoService = produtoService;
    afterNextRender2(() => {
      this.carregar();
    });
  }
  produtoService;
  produtos = [];
  novoProduto = { codigo: "", descricao: "", saldo: 0 };
  erro = "";
  editandoId = null;
  carregando = false;
  carregar() {
    this.carregando = true;
    this.produtoService.listar().subscribe({
      next: (dados) => {
        this.produtos = dados;
        this.carregando = false;
        this.erro = "";
      },
      error: (e) => {
        this.carregando = false;
        this.erro = "Erro ao carregar produtos. Verifique se o backend est\xE1 rodando.";
        console.error("Erro ao carregar:", e);
      }
    });
  }
  resetForm() {
    this.novoProduto = { codigo: "", descricao: "", saldo: 0 };
    this.editandoId = null;
    this.erro = "";
  }
  salvar() {
    if (!this.novoProduto.codigo || !this.novoProduto.descricao) {
      this.erro = "C\xF3digo e descri\xE7\xE3o s\xE3o obrigat\xF3rios.";
      return;
    }
    const payload = __spreadProps(__spreadValues({}, this.novoProduto), {
      saldo: Number(this.novoProduto.saldo) || 0
    });
    const operacao = this.editandoId !== null ? this.produtoService.atualizar(this.editandoId, payload) : this.produtoService.criar(payload);
    operacao.subscribe({
      next: () => {
        this.resetForm();
        this.carregar();
      },
      error: (e) => this.erro = e.error?.erro || "Erro ao salvar produto."
    });
  }
  editar(produto) {
    this.editandoId = produto.id ?? null;
    this.novoProduto = __spreadProps(__spreadValues({}, produto), {
      codigo: produto.codigo,
      descricao: produto.descricao,
      saldo: produto.saldo ?? 0
    });
    this.erro = "";
  }
  cancelarEdicao() {
    this.resetForm();
  }
  excluir(id) {
    if (!id)
      return;
    this.produtoService.excluir(id).subscribe({
      next: () => this.carregar(),
      error: (e) => this.erro = e.error?.erro || "Erro ao excluir produto."
    });
  }
  static \u0275fac = function ProdutosComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProdutosComponent)(i03.\u0275\u0275directiveInject(ProdutoService));
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _ProdutosComponent, selectors: [["app-produtos"]], decls: 49, vars: 11, consts: [[1, "produtos-page"], [1, "page-header"], [1, "badge"], [1, "card", "form-card"], [1, "card-title"], [1, "form-grid"], [1, "field"], ["type", "text", "placeholder", "Ex: P-001", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ex: Teclado mec\xE2nico", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "placeholder", "0", 3, "ngModelChange", "ngModel"], [1, "actions"], ["type", "button", 1, "primary", 3, "click"], ["type", "button", "class", "secondary", 3, "click", 4, "ngIf"], ["class", "erro", 4, "ngIf"], [1, "card", "table-card"], [1, "table-header"], [1, "table-wrap"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "secondary", 3, "click"], [1, "erro"], ["colspan", "4", 2, "text-align", "center", "padding", "32px"], [2, "display", "flex", "flex-direction", "column", "align-items", "center", "gap", "12px"], [2, "width", "40px", "height", "40px", "border", "4px solid rgba(59, 130, 246, 0.2)", "border-top-color", "#3b82f6", "border-radius", "50%", "animation", "spin 0.8s linear infinite"], ["colspan", "4", 2, "text-align", "center", "padding", "24px"], [1, "action-group"], ["type", "button", 1, "ghost", 3, "click"], ["type", "button", 1, "danger", 3, "click"]], template: function ProdutosComponent_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h2");
      i03.\u0275\u0275text(4, "Produtos");
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(5, "span", 2);
      i03.\u0275\u0275text(6);
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "h3");
      i03.\u0275\u0275text(10);
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(11, "div", 5)(12, "label", 6)(13, "span");
      i03.\u0275\u0275text(14, "C\xF3digo");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(15, "input", 7);
      i03.\u0275\u0275twoWayListener("ngModelChange", function ProdutosComponent_Template_input_ngModelChange_15_listener($event) {
        i03.\u0275\u0275twoWayBindingSet(ctx.novoProduto.codigo, $event) || (ctx.novoProduto.codigo = $event);
        return $event;
      });
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275controlCreate();
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(16, "label", 6)(17, "span");
      i03.\u0275\u0275text(18, "Descri\xE7\xE3o");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(19, "input", 8);
      i03.\u0275\u0275twoWayListener("ngModelChange", function ProdutosComponent_Template_input_ngModelChange_19_listener($event) {
        i03.\u0275\u0275twoWayBindingSet(ctx.novoProduto.descricao, $event) || (ctx.novoProduto.descricao = $event);
        return $event;
      });
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275controlCreate();
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(20, "label", 6)(21, "span");
      i03.\u0275\u0275text(22, "Saldo");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(23, "input", 9);
      i03.\u0275\u0275twoWayListener("ngModelChange", function ProdutosComponent_Template_input_ngModelChange_23_listener($event) {
        i03.\u0275\u0275twoWayBindingSet(ctx.novoProduto.saldo, $event) || (ctx.novoProduto.saldo = $event);
        return $event;
      });
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275controlCreate();
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(24, "div", 10)(25, "button", 11);
      i03.\u0275\u0275listener("click", function ProdutosComponent_Template_button_click_25_listener() {
        return ctx.salvar();
      });
      i03.\u0275\u0275text(26);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275template(27, ProdutosComponent_button_27_Template, 2, 0, "button", 12);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275template(28, ProdutosComponent_p_28_Template, 2, 1, "p", 13);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(29, "div", 14)(30, "div", 15)(31, "h3");
      i03.\u0275\u0275text(32, "Lista de produtos");
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(33, "div", 16)(34, "table")(35, "thead")(36, "tr")(37, "th");
      i03.\u0275\u0275text(38, "C\xF3digo");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(39, "th");
      i03.\u0275\u0275text(40, "Descri\xE7\xE3o");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(41, "th");
      i03.\u0275\u0275text(42, "Saldo");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(43, "th");
      i03.\u0275\u0275text(44, "A\xE7\xF5es");
      i03.\u0275\u0275elementEnd()()();
      i03.\u0275\u0275elementStart(45, "tbody");
      i03.\u0275\u0275template(46, ProdutosComponent_tr_46_Template, 6, 0, "tr", 17)(47, ProdutosComponent_tr_47_Template, 3, 0, "tr", 17)(48, ProdutosComponent_tr_48_Template, 13, 3, "tr", 18);
      i03.\u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      i03.\u0275\u0275advance(6);
      i03.\u0275\u0275textInterpolate1("", ctx.produtos.length, " itens");
      i03.\u0275\u0275advance(4);
      i03.\u0275\u0275textInterpolate(ctx.editandoId !== null ? "Editar produto" : "Cadastrar produto");
      i03.\u0275\u0275advance(5);
      i03.\u0275\u0275twoWayProperty("ngModel", ctx.novoProduto.codigo);
      i03.\u0275\u0275control();
      i03.\u0275\u0275advance(4);
      i03.\u0275\u0275twoWayProperty("ngModel", ctx.novoProduto.descricao);
      i03.\u0275\u0275control();
      i03.\u0275\u0275advance(4);
      i03.\u0275\u0275twoWayProperty("ngModel", ctx.novoProduto.saldo);
      i03.\u0275\u0275control();
      i03.\u0275\u0275advance(3);
      i03.\u0275\u0275textInterpolate1(" ", ctx.editandoId !== null ? "Atualizar" : "Salvar", " ");
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngIf", ctx.editandoId !== null);
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngIf", ctx.erro);
      i03.\u0275\u0275advance(18);
      i03.\u0275\u0275property("ngIf", ctx.carregando);
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngIf", !ctx.carregando && ctx.produtos.length === 0);
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngForOf", ctx.produtos);
    }
  }, dependencies: [CommonModule2, i22.NgClass, i22.NgComponentOutlet, i22.NgForOf, i22.NgIf, i22.NgTemplateOutlet, i22.NgStyle, i22.NgSwitch, i22.NgSwitchCase, i22.NgSwitchDefault, i22.NgPlural, i22.NgPluralCase, FormsModule, i3.\u0275NgNoValidate, i3.NgSelectOption, i3.\u0275NgSelectMultipleOption, i3.DefaultValueAccessor, i3.NumberValueAccessor, i3.RangeValueAccessor, i3.CheckboxControlValueAccessor, i3.SelectControlValueAccessor, i3.SelectMultipleControlValueAccessor, i3.RadioControlValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.RequiredValidator, i3.MinLengthValidator, i3.MaxLengthValidator, i3.PatternValidator, i3.CheckboxRequiredValidator, i3.EmailValidator, i3.MinValidator, i3.MaxValidator, i3.NgModel, i3.NgModelGroup, i3.NgForm, i22.AsyncPipe, i22.UpperCasePipe, i22.LowerCasePipe, i22.JsonPipe, i22.SlicePipe, i22.DecimalPipe, i22.PercentPipe, i22.TitleCasePipe, i22.CurrencyPipe, i22.DatePipe, i22.I18nPluralPipe, i22.I18nSelectPipe, i22.KeyValuePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #e5eefb;\n}\n.produtos-page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 32px 20px 60px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #8ab4ff;\n  margin-bottom: 8px;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(2rem, 3vw, 2.6rem);\n  color: #f3f7ff;\n}\nh3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n  color: #eef5ff;\n}\n.badge[_ngcontent-%COMP%] {\n  background: rgba(107, 143, 255, 0.14);\n  border: 1px solid rgba(142, 177, 255, 0.3);\n  color: #dfeafe;\n  padding: 8px 12px;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.72);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 20px;\n  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.28);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.card-title[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(180px, 1fr));\n  gap: 18px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #c7d8f8;\n  font-weight: 600;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 14px;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.28);\n  background: rgba(15, 23, 42, 0.35);\n  color: #f8fbff;\n  font-size: 0.96rem;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    transform 0.2s ease;\n}\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: rgba(125, 211, 252, 0.8);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.22);\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 22px;\n}\nbutton[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 12px;\n  padding: 11px 18px;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    opacity 0.2s ease,\n    box-shadow 0.2s ease;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f8cff,\n      #7c3aed);\n  color: white;\n  box-shadow: 0 12px 22px rgba(96, 125, 255, 0.28);\n}\n.secondary[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.12);\n  color: #e2e8f0;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n}\n.ghost[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.12);\n  color: #dbeafe;\n  border: 1px solid rgba(96, 165, 250, 0.25);\n}\n.danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.12);\n  color: #fecaca;\n  border: 1px solid rgba(248, 113, 113, 0.25);\n}\n.erro[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  color: #fca5a5;\n  font-weight: 600;\n  min-height: 20px;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 18px 20px 12px;\n}\n.table-header[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 14px 12px;\n  text-align: left;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.14);\n}\nth[_ngcontent-%COMP%] {\n  color: #b5c7e6;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 700;\n}\ntd[_ngcontent-%COMP%] {\n  color: #edf4ff;\n  font-size: 0.96rem;\n}\n.action-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=produtos.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(ProdutosComponent, [{
    type: Component2,
    args: [{ selector: "app-produtos", standalone: true, imports: [CommonModule2, FormsModule], template: `<section class="produtos-page">\r
  <div class="page-header">\r
    <div>\r
     \r
      <h2>Produtos</h2>\r
    </div>\r
    <span class="badge">{{ produtos.length }} itens</span>\r
  </div>\r
\r
  <div class="card form-card">\r
    <div class="card-title">\r
      <h3>{{ editandoId !== null ? 'Editar produto' : 'Cadastrar produto' }}</h3>\r
    </div>\r
\r
    <div class="form-grid">\r
      <label class="field">\r
        <span>C\xF3digo</span>\r
        <input type="text" placeholder="Ex: P-001" [(ngModel)]="novoProduto.codigo" />\r
      </label>\r
\r
      <label class="field">\r
        <span>Descri\xE7\xE3o</span>\r
        <input type="text" placeholder="Ex: Teclado mec\xE2nico" [(ngModel)]="novoProduto.descricao" />\r
      </label>\r
\r
      <label class="field">\r
        <span>Saldo</span>\r
        <input type="number" min="0" placeholder="0" [(ngModel)]="novoProduto.saldo" />\r
      </label>\r
    </div>\r
\r
    <div class="actions">\r
      <button type="button" class="primary" (click)="salvar()">\r
        {{ editandoId !== null ? 'Atualizar' : 'Salvar' }}\r
      </button>\r
\r
      <button type="button" class="secondary" *ngIf="editandoId !== null" (click)="cancelarEdicao()">\r
        Cancelar\r
      </button>\r
    </div>\r
\r
    <p class="erro" *ngIf="erro">{{ erro }}</p>\r
  </div>\r
\r
  <div class="card table-card">\r
    <div class="table-header">\r
      <h3>Lista de produtos</h3>\r
    </div>\r
\r
    <div class="table-wrap">\r
      <table>\r
        <thead>\r
          <tr>\r
            <th>C\xF3digo</th>\r
            <th>Descri\xE7\xE3o</th>\r
            <th>Saldo</th>\r
            <th>A\xE7\xF5es</th>\r
          </tr>\r
        </thead>\r
        <tbody>\r
          <tr *ngIf="carregando">\r
            <td colspan="4" style="text-align: center; padding: 32px;">\r
              <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">\r
                <div style="width: 40px; height: 40px; border: 4px solid rgba(59, 130, 246, 0.2); border-top-color: #3b82f6; border-radius: 50%; animation: spin 0.8s linear infinite;"></div>\r
                <span>Carregando produtos...</span>\r
              </div>\r
            </td>\r
          </tr>\r
          <tr *ngIf="!carregando && produtos.length === 0">\r
            <td colspan="4" style="text-align: center; padding: 24px;">Nenhum produto cadastrado</td>\r
          </tr>\r
          <tr *ngFor="let p of produtos">\r
            <td>{{ p.codigo }}</td>\r
            <td>{{ p.descricao }}</td>\r
            <td>{{ p.saldo }}</td>\r
            <td>\r
              <div class="action-group">\r
                <button type="button" class="ghost" (click)="editar(p)">Editar</button>\r
                <button type="button" class="danger" (click)="excluir(p.id)">Excluir</button>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </table>\r
    </div>\r
  </div>\r
</section>`, styles: ['/* src/app/pages/produtos/produtos.css */\n:host {\n  display: block;\n  min-height: 100%;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #e5eefb;\n}\n.produtos-page {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 32px 20px 60px;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n}\n.eyebrow {\n  display: inline-block;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  color: #8ab4ff;\n  margin-bottom: 8px;\n}\nh2 {\n  margin: 0;\n  font-size: clamp(2rem, 3vw, 2.6rem);\n  color: #f3f7ff;\n}\nh3 {\n  margin: 0;\n  font-size: 1.15rem;\n  color: #eef5ff;\n}\n.badge {\n  background: rgba(107, 143, 255, 0.14);\n  border: 1px solid rgba(142, 177, 255, 0.3);\n  color: #dfeafe;\n  padding: 8px 12px;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.card {\n  background: rgba(15, 23, 42, 0.72);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 20px;\n  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.28);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.form-card {\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.card-title {\n  margin-bottom: 18px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(180px, 1fr));\n  gap: 18px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.field span {\n  font-size: 0.82rem;\n  color: #c7d8f8;\n  font-weight: 600;\n}\n.field input {\n  width: 100%;\n  padding: 12px 14px;\n  border-radius: 12px;\n  border: 1px solid rgba(148, 163, 184, 0.28);\n  background: rgba(15, 23, 42, 0.35);\n  color: #f8fbff;\n  font-size: 0.96rem;\n  outline: none;\n  transition:\n    border-color 0.2s ease,\n    box-shadow 0.2s ease,\n    transform 0.2s ease;\n}\n.field input:focus {\n  border-color: rgba(125, 211, 252, 0.8);\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.22);\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-top: 22px;\n}\nbutton {\n  border: none;\n  border-radius: 12px;\n  padding: 11px 18px;\n  font-weight: 700;\n  cursor: pointer;\n  transition:\n    transform 0.2s ease,\n    opacity 0.2s ease,\n    box-shadow 0.2s ease;\n}\nbutton:hover {\n  transform: translateY(-1px);\n}\n.primary {\n  background:\n    linear-gradient(\n      135deg,\n      #4f8cff,\n      #7c3aed);\n  color: white;\n  box-shadow: 0 12px 22px rgba(96, 125, 255, 0.28);\n}\n.secondary {\n  background: rgba(148, 163, 184, 0.12);\n  color: #e2e8f0;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n}\n.ghost {\n  background: rgba(59, 130, 246, 0.12);\n  color: #dbeafe;\n  border: 1px solid rgba(96, 165, 250, 0.25);\n}\n.danger {\n  background: rgba(239, 68, 68, 0.12);\n  color: #fecaca;\n  border: 1px solid rgba(248, 113, 113, 0.25);\n}\n.erro {\n  margin-top: 18px;\n  color: #fca5a5;\n  font-weight: 600;\n  min-height: 20px;\n}\n.table-card {\n  padding: 18px 20px 12px;\n}\n.table-header {\n  margin-bottom: 14px;\n}\n.table-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\nth,\ntd {\n  padding: 14px 12px;\n  text-align: left;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.14);\n}\nth {\n  color: #b5c7e6;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  font-weight: 700;\n}\ntd {\n  color: #edf4ff;\n  font-size: 0.96rem;\n}\n.action-group {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n@media (max-width: 768px) {\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .actions {\n    flex-wrap: wrap;\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=produtos.css.map */\n'] }]
  }], () => [{ type: ProdutoService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(ProdutosComponent, { className: "ProdutosComponent", filePath: "src/app/pages/produtos/produtos.component.ts", lineNumber: 14 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fprodutos%2Fprodutos.component.ts%40ProdutosComponent";
  function ProdutosComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i03.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(ProdutosComponent, m.default, [i03, i22, i3, produto_service_exports], [CommonModule2, FormsModule, Component2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ProdutosComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ProdutosComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/notas-fiscais/notas-fiscais.component.ts
import { Component as Component3, afterNextRender as afterNextRender3 } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
import { CommonModule as CommonModule3 } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_common.js?v=df08ab4b";
import * as i05 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";

// src/app/services/nota-fiscal.service.ts
var nota_fiscal_service_exports = {};
__export(nota_fiscal_service_exports, {
  NotaFiscalService: () => NotaFiscalService
});

// src/app/services/nota-fiscal.ts
import { Injectable as Injectable2 } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
import { of } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/rxjs.js?v=df08ab4b";
import { catchError as catchError2, timeout as timeout2 } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/rxjs_operators.js?v=df08ab4b";
import * as i04 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
import * as i12 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_common_http.js?v=df08ab4b";
var NotaFiscalService = class _NotaFiscalService {
  constructor(http) {
    this.http = http;
  }
  http;
  apiUrl = "http://localhost:8081/notas-fiscais";
  listar() {
    return this.http.get(this.apiUrl).pipe(timeout2(5e3), catchError2(() => of([])));
  }
  buscar(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  criar(itens) {
    return this.http.post(this.apiUrl, { itens });
  }
  imprimir(id) {
    return this.http.post(`${this.apiUrl}/${id}/imprimir`, {});
  }
  static \u0275fac = function NotaFiscalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotaFiscalService)(i04.\u0275\u0275inject(i12.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i04.\u0275\u0275defineInjectable({ token: _NotaFiscalService, factory: _NotaFiscalService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(NotaFiscalService, [{
    type: Injectable2,
    args: [{ providedIn: "root" }]
  }], () => [{ type: i12.HttpClient }], null);
})();

// src/app/pages/notas-fiscais/notas-fiscais.component.ts
import * as i23 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_router.js?v=df08ab4b";
import * as i32 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_common.js?v=df08ab4b";
function NotasFiscaisComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "p", 9);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate(ctx_r0.erro);
  }
}
function NotasFiscaisComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "p", 10);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate(ctx_r0.sucesso);
  }
}
function NotasFiscaisComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "div", 11);
    i05.\u0275\u0275text(1, " Nenhuma nota fiscal cadastrada. ");
    i05.\u0275\u0275elementEnd();
  }
}
function NotasFiscaisComponent_div_13_div_1_div_8_li_2_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "li");
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate3(" ", item_r3.codigo, " - ", item_r3.descricao, " \xB7 ", item_r3.quantidade, " unidade(s) ");
  }
}
function NotasFiscaisComponent_div_13_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "div", 19)(1, "ul");
    i05.\u0275\u0275template(2, NotasFiscaisComponent_div_13_div_1_div_8_li_2_Template, 2, 3, "li", 20);
    i05.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const nota_r4 = i05.\u0275\u0275nextContext().$implicit;
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275property("ngForOf", nota_r4.itens);
  }
}
function NotasFiscaisComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div")(3, "strong");
    i05.\u0275\u0275text(4);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(5, "span");
    i05.\u0275\u0275pipe(6, "lowercase");
    i05.\u0275\u0275text(7);
    i05.\u0275\u0275elementEnd()()();
    i05.\u0275\u0275template(8, NotasFiscaisComponent_div_13_div_1_div_8_Template, 3, 1, "div", 16);
    i05.\u0275\u0275elementStart(9, "div", 17)(10, "button", 18);
    i05.\u0275\u0275listener("click", function NotasFiscaisComponent_div_13_div_1_Template_button_click_10_listener() {
      const nota_r4 = i05.\u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = i05.\u0275\u0275nextContext(2);
      return i05.\u0275\u0275resetView(ctx_r0.imprimirNota(nota_r4));
    });
    i05.\u0275\u0275text(11);
    i05.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const nota_r4 = ctx.$implicit;
    const ctx_r0 = i05.\u0275\u0275nextContext(2);
    i05.\u0275\u0275advance(4);
    i05.\u0275\u0275textInterpolate1("Nota n\xBA ", nota_r4.numero);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275classMap(i05.\u0275\u0275interpolate1("status status-", i05.\u0275\u0275pipeBind1(6, 8, nota_r4.status)));
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(nota_r4.status);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("ngIf", nota_r4.itens?.length);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275property("disabled", nota_r4.status !== "Aberta" || ctx_r0.processandoImpressaoId === nota_r4.id);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", ctx_r0.processandoImpressaoId === nota_r4.id ? "Processando..." : "Imprimir", " ");
  }
}
function NotasFiscaisComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "div", 12);
    i05.\u0275\u0275template(1, NotasFiscaisComponent_div_13_div_1_Template, 12, 10, "div", 13);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275advance();
    i05.\u0275\u0275property("ngForOf", ctx_r0.notas);
  }
}
var NotasFiscaisComponent = class _NotasFiscaisComponent {
  constructor(notaFiscalService, router) {
    this.notaFiscalService = notaFiscalService;
    this.router = router;
    afterNextRender3(() => {
      this.carregarNotas();
    });
  }
  notaFiscalService;
  router;
  notas = [];
  erro = "";
  sucesso = "";
  processandoImpressaoId = null;
  carregarNotas() {
    this.notaFiscalService.listar().subscribe({
      next: (dados) => {
        this.notas = dados;
      },
      error: () => {
        this.erro = "Erro ao carregar as notas fiscais.";
      }
    });
  }
  imprimirNota(nota) {
    if (nota.status !== "Aberta") {
      this.erro = "Somente notas com status Aberta podem ser impressas.";
      return;
    }
    this.processandoImpressaoId = nota.id;
    this.erro = "";
    this.sucesso = "";
    this.notaFiscalService.imprimir(nota.id).subscribe({
      next: (res) => {
        this.sucesso = res?.mensagem || "Nota impressa com sucesso.";
        this.carregarNotas();
      },
      error: (e) => {
        this.erro = e?.error?.erro || "Erro ao imprimir a nota fiscal.";
      },
      complete: () => {
        this.processandoImpressaoId = null;
      }
    });
  }
  irParaNovaNota() {
    this.router.navigate(["/notas-fiscais/nova"]);
  }
  static \u0275fac = function NotasFiscaisComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotasFiscaisComponent)(i05.\u0275\u0275directiveInject(NotaFiscalService), i05.\u0275\u0275directiveInject(i23.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _NotasFiscaisComponent, selectors: [["app-notas-fiscais"]], decls: 14, vars: 4, consts: [[1, "notas-page"], [1, "header-row"], [1, "eyebrow"], ["type", "button", 1, "primary-btn", 3, "click"], [1, "card"], ["class", "erro", 4, "ngIf"], ["class", "sucesso", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "lista-notas", 4, "ngIf"], [1, "erro"], [1, "sucesso"], [1, "empty-state"], [1, "lista-notas"], ["class", "nota-item", 4, "ngFor", "ngForOf"], [1, "nota-item"], [1, "nota-topo"], ["class", "nota-detalhes", 4, "ngIf"], [1, "nota-acao"], ["type", "button", 1, "primary-btn", 3, "click", "disabled"], [1, "nota-detalhes"], [4, "ngFor", "ngForOf"]], template: function NotasFiscaisComponent_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "p", 2);
      i05.\u0275\u0275text(4, "Notas fiscais");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(5, "h2");
      i05.\u0275\u0275text(6, "Notas Cadastradas");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(7, "button", 3);
      i05.\u0275\u0275listener("click", function NotasFiscaisComponent_Template_button_click_7_listener() {
        return ctx.irParaNovaNota();
      });
      i05.\u0275\u0275text(8, " + Criar nota ");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(9, "div", 4);
      i05.\u0275\u0275template(10, NotasFiscaisComponent_p_10_Template, 2, 1, "p", 5)(11, NotasFiscaisComponent_p_11_Template, 2, 1, "p", 6)(12, NotasFiscaisComponent_div_12_Template, 2, 0, "div", 7)(13, NotasFiscaisComponent_div_13_Template, 2, 1, "div", 8);
      i05.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i05.\u0275\u0275advance(10);
      i05.\u0275\u0275property("ngIf", ctx.erro);
      i05.\u0275\u0275advance();
      i05.\u0275\u0275property("ngIf", ctx.sucesso);
      i05.\u0275\u0275advance();
      i05.\u0275\u0275property("ngIf", ctx.notas.length === 0);
      i05.\u0275\u0275advance();
      i05.\u0275\u0275property("ngIf", ctx.notas.length > 0);
    }
  }, dependencies: [CommonModule3, i32.NgClass, i32.NgComponentOutlet, i32.NgForOf, i32.NgIf, i32.NgTemplateOutlet, i32.NgStyle, i32.NgSwitch, i32.NgSwitchCase, i32.NgSwitchDefault, i32.NgPlural, i32.NgPluralCase, i32.AsyncPipe, i32.UpperCasePipe, i32.LowerCasePipe, i32.JsonPipe, i32.SlicePipe, i32.DecimalPipe, i32.PercentPipe, i32.TitleCasePipe, i32.CurrencyPipe, i32.DatePipe, i32.I18nPluralPipe, i32.I18nSelectPipe, i32.KeyValuePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #e5eefb;\n}\n.notas-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 40px 20px 80px;\n}\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 22px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #93c5fd;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #f3f7ff;\n}\n.card[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.72);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.2);\n}\n.primary-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  padding: 11px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f8cff,\n      #7c3aed);\n  color: white;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: 0 8px 16px rgba(79, 140, 255, 0.28);\n}\n.primary-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.primary-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.erro[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #fca5a5;\n  font-weight: 600;\n}\n.sucesso[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #86efac;\n  font-weight: 600;\n}\n.empty-state[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  padding: 12px 0;\n}\n.lista-notas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.nota-item[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.16);\n  border-radius: 16px;\n  background: rgba(15, 23, 42, 0.5);\n  padding: 18px;\n}\n.nota-topo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.nota-topo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f3f7ff;\n}\n.status[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 12px;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.status-aberta[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.14);\n  color: #bfdbfe;\n}\n.status-fechada[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.14);\n  color: #bbf7d0;\n}\n.nota-detalhes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  color: #cbd5e1;\n  line-height: 1.8;\n}\n.nota-acao[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: flex;\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .header-row[_ngcontent-%COMP%], \n   .nota-topo[_ngcontent-%COMP%], \n   .nota-acao[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .primary-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=notas-fiscais.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(NotasFiscaisComponent, [{
    type: Component3,
    args: [{ selector: "app-notas-fiscais", standalone: true, imports: [CommonModule3], template: `<section class="notas-page">\r
  <div class="header-row">\r
    <div>\r
      <p class="eyebrow">Notas fiscais</p>\r
      <h2>Notas Cadastradas</h2>\r
    </div>\r
    <button class="primary-btn" type="button" (click)="irParaNovaNota()">\r
      + Criar nota\r
    </button>\r
  </div>\r
\r
  <div class="card">\r
    <p class="erro" *ngIf="erro">{{ erro }}</p>\r
    <p class="sucesso" *ngIf="sucesso">{{ sucesso }}</p>\r
\r
    <div *ngIf="notas.length === 0" class="empty-state">\r
      Nenhuma nota fiscal cadastrada.\r
    </div>\r
\r
    <div *ngIf="notas.length > 0" class="lista-notas">\r
      <div class="nota-item" *ngFor="let nota of notas">\r
        <div class="nota-topo">\r
          <div>\r
            <strong>Nota n\xBA {{ nota.numero }}</strong>\r
            <span class="status status-{{ nota.status | lowercase }}">{{ nota.status }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="nota-detalhes" *ngIf="nota.itens?.length">\r
          <ul>\r
            <li *ngFor="let item of nota.itens">\r
              {{ item.codigo }} - {{ item.descricao }} \xB7 {{ item.quantidade }} unidade(s)\r
            </li>\r
          </ul>\r
        </div>\r
\r
        <div class="nota-acao">\r
          <button\r
            class="primary-btn"\r
            type="button"\r
            (click)="imprimirNota(nota)"\r
            [disabled]="nota.status !== 'Aberta' || processandoImpressaoId === nota.id"\r
          >\r
            {{ processandoImpressaoId === nota.id ? 'Processando...' : 'Imprimir' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>`, styles: ['/* src/app/pages/notas-fiscais/notas-fiscais.css */\n:host {\n  display: block;\n  min-height: 100%;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #e5eefb;\n}\n.notas-page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 40px 20px 80px;\n}\n.header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 22px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #93c5fd;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\nh2 {\n  margin: 0;\n  color: #f3f7ff;\n}\n.card {\n  background: rgba(15, 23, 42, 0.72);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.2);\n}\n.primary-btn {\n  border: none;\n  border-radius: 10px;\n  padding: 11px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f8cff,\n      #7c3aed);\n  color: white;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n  box-shadow: 0 8px 16px rgba(79, 140, 255, 0.28);\n}\n.primary-btn:hover {\n  transform: translateY(-2px);\n}\n.primary-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.erro {\n  margin: 0 0 12px;\n  color: #fca5a5;\n  font-weight: 600;\n}\n.sucesso {\n  margin: 0 0 12px;\n  color: #86efac;\n  font-weight: 600;\n}\n.empty-state {\n  color: #94a3b8;\n  padding: 12px 0;\n}\n.lista-notas {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.nota-item {\n  border: 1px solid rgba(148, 163, 184, 0.16);\n  border-radius: 16px;\n  background: rgba(15, 23, 42, 0.5);\n  padding: 18px;\n}\n.nota-topo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.nota-topo strong {\n  color: #f3f7ff;\n}\n.status {\n  display: inline-block;\n  margin-left: 12px;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.status-aberta {\n  background: rgba(59, 130, 246, 0.14);\n  color: #bfdbfe;\n}\n.status-fechada {\n  background: rgba(34, 197, 94, 0.14);\n  color: #bbf7d0;\n}\n.nota-detalhes ul {\n  margin: 0;\n  padding-left: 18px;\n  color: #cbd5e1;\n  line-height: 1.8;\n}\n.nota-acao {\n  margin-top: 14px;\n  display: flex;\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .header-row,\n  .nota-topo,\n  .nota-acao {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .primary-btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=notas-fiscais.css.map */\n'] }]
  }], () => [{ type: NotaFiscalService }, { type: i23.Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(NotasFiscaisComponent, { className: "NotasFiscaisComponent", filePath: "src/app/pages/notas-fiscais/notas-fiscais.component.ts", lineNumber: 14 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fnotas-fiscais%2Fnotas-fiscais.component.ts%40NotasFiscaisComponent";
  function NotasFiscaisComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i05.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(NotasFiscaisComponent, m.default, [i05, i32, nota_fiscal_service_exports, i23], [CommonModule3, Component3], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && NotasFiscaisComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && NotasFiscaisComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/nota-fiscal-nova/nota-fiscal-nova.component.ts
import { Component as Component4, afterNextRender as afterNextRender4 } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
import { CommonModule as CommonModule4 } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_common.js?v=df08ab4b";
import { FormsModule as FormsModule2 } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_forms.js?v=df08ab4b";
import * as i06 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
import * as i33 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_router.js?v=df08ab4b";
import * as i4 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_common.js?v=df08ab4b";
import * as i5 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_forms.js?v=df08ab4b";
function NotaFiscalNovaComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "option", 7);
    i06.\u0275\u0275text(1);
    i06.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    i06.\u0275\u0275property("ngValue", p_r1.id);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate3(" ", p_r1.codigo, " - ", p_r1.descricao, " (saldo: ", p_r1.saldo, ") ");
  }
}
function NotaFiscalNovaComponent_div_25_p_3_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "p", 21);
    i06.\u0275\u0275text(1);
    i06.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i06.\u0275\u0275nextContext(2);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate(ctx_r1.erro);
  }
}
function NotaFiscalNovaComponent_div_25_p_4_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "p", 22);
    i06.\u0275\u0275text(1);
    i06.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i06.\u0275\u0275nextContext(2);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate(ctx_r1.sucesso);
  }
}
function NotaFiscalNovaComponent_div_25_table_5_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = i06.\u0275\u0275getCurrentView();
    i06.\u0275\u0275elementStart(0, "tr")(1, "td");
    i06.\u0275\u0275text(2);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(3, "td");
    i06.\u0275\u0275text(4);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(5, "td")(6, "button", 25);
    i06.\u0275\u0275listener("click", function NotaFiscalNovaComponent_div_25_table_5_tr_10_Template_button_click_6_listener() {
      const i_r4 = i06.\u0275\u0275restoreView(_r3).index;
      const ctx_r1 = i06.\u0275\u0275nextContext(3);
      return i06.\u0275\u0275resetView(ctx_r1.removerItem(i_r4));
    });
    i06.\u0275\u0275text(7, "Remover");
    i06.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = i06.\u0275\u0275nextContext(3);
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate(ctx_r1.nomeProduto(item_r5.produto_id));
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate(item_r5.quantidade);
  }
}
function NotaFiscalNovaComponent_div_25_table_5_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "table", 23)(1, "thead")(2, "tr")(3, "th");
    i06.\u0275\u0275text(4, "Produto");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(5, "th");
    i06.\u0275\u0275text(6, "Quantidade");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(7, "th");
    i06.\u0275\u0275text(8, "A\xE7\xF5es");
    i06.\u0275\u0275elementEnd()()();
    i06.\u0275\u0275elementStart(9, "tbody");
    i06.\u0275\u0275template(10, NotaFiscalNovaComponent_div_25_table_5_tr_10_Template, 8, 2, "tr", 24);
    i06.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i06.\u0275\u0275nextContext(2);
    i06.\u0275\u0275advance(10);
    i06.\u0275\u0275property("ngForOf", ctx_r1.itens);
  }
}
function NotaFiscalNovaComponent_div_25_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = i06.\u0275\u0275getCurrentView();
    i06.\u0275\u0275elementStart(0, "div", 26)(1, "button", 27);
    i06.\u0275\u0275listener("click", function NotaFiscalNovaComponent_div_25_div_6_Template_button_click_1_listener() {
      i06.\u0275\u0275restoreView(_r6);
      const ctx_r1 = i06.\u0275\u0275nextContext(2);
      return i06.\u0275\u0275resetView(ctx_r1.salvarNota());
    });
    i06.\u0275\u0275text(2);
    i06.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i06.\u0275\u0275nextContext(2);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("disabled", ctx_r1.salvando);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate1(" ", ctx_r1.salvando ? "Salvando..." : "Salvar Nota (status: Aberta)", " ");
  }
}
function NotaFiscalNovaComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "div", 4)(1, "h3");
    i06.\u0275\u0275text(2, "Produtos da nota");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275template(3, NotaFiscalNovaComponent_div_25_p_3_Template, 2, 1, "p", 17)(4, NotaFiscalNovaComponent_div_25_p_4_Template, 2, 1, "p", 18)(5, NotaFiscalNovaComponent_div_25_table_5_Template, 11, 1, "table", 19)(6, NotaFiscalNovaComponent_div_25_div_6_Template, 3, 2, "div", 20);
    i06.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i06.\u0275\u0275nextContext();
    i06.\u0275\u0275advance(3);
    i06.\u0275\u0275property("ngIf", ctx_r1.erro);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("ngIf", ctx_r1.sucesso);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("ngIf", ctx_r1.itens.length > 0);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("ngIf", ctx_r1.itens.length > 0);
  }
}
function NotaFiscalNovaComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "div", 28);
    i06.\u0275\u0275text(1, " Nenhuma nota fiscal cadastrada ainda. ");
    i06.\u0275\u0275elementEnd();
  }
}
function NotaFiscalNovaComponent_div_31_div_1_div_8_li_2_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "li");
    i06.\u0275\u0275text(1);
    i06.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate3(" ", item_r8.codigo, " - ", item_r8.descricao, " \xB7 ", item_r8.quantidade, " unidade(s) ");
  }
}
function NotaFiscalNovaComponent_div_31_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "div", 35)(1, "ul");
    i06.\u0275\u0275template(2, NotaFiscalNovaComponent_div_31_div_1_div_8_li_2_Template, 2, 3, "li", 24);
    i06.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const nota_r9 = i06.\u0275\u0275nextContext().$implicit;
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275property("ngForOf", nota_r9.itens);
  }
}
function NotaFiscalNovaComponent_div_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = i06.\u0275\u0275getCurrentView();
    i06.\u0275\u0275elementStart(0, "div", 31)(1, "div", 32)(2, "div")(3, "strong");
    i06.\u0275\u0275text(4);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(5, "span");
    i06.\u0275\u0275pipe(6, "lowercase");
    i06.\u0275\u0275text(7);
    i06.\u0275\u0275elementEnd()()();
    i06.\u0275\u0275template(8, NotaFiscalNovaComponent_div_31_div_1_div_8_Template, 3, 1, "div", 33);
    i06.\u0275\u0275elementStart(9, "div", 34)(10, "button", 27);
    i06.\u0275\u0275listener("click", function NotaFiscalNovaComponent_div_31_div_1_Template_button_click_10_listener() {
      const nota_r9 = i06.\u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = i06.\u0275\u0275nextContext(2);
      return i06.\u0275\u0275resetView(ctx_r1.imprimirNota(nota_r9));
    });
    i06.\u0275\u0275text(11);
    i06.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const nota_r9 = ctx.$implicit;
    const ctx_r1 = i06.\u0275\u0275nextContext(2);
    i06.\u0275\u0275advance(4);
    i06.\u0275\u0275textInterpolate1("Nota n\xBA ", nota_r9.numero);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275classMap(i06.\u0275\u0275interpolate1("status status-", i06.\u0275\u0275pipeBind1(6, 8, nota_r9.status)));
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate(nota_r9.status);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("ngIf", nota_r9.itens?.length);
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275property("disabled", nota_r9.status !== "Aberta" || ctx_r1.processandoImpressaoId === nota_r9.id);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate1(" ", ctx_r1.processandoImpressaoId === nota_r9.id ? "Processando..." : "Imprimir", " ");
  }
}
function NotaFiscalNovaComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "div", 29);
    i06.\u0275\u0275template(1, NotaFiscalNovaComponent_div_31_div_1_Template, 12, 10, "div", 30);
    i06.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i06.\u0275\u0275nextContext();
    i06.\u0275\u0275advance();
    i06.\u0275\u0275property("ngForOf", ctx_r1.notas);
  }
}
var NotaFiscalNovaComponent = class _NotaFiscalNovaComponent {
  constructor(produtoService, notaFiscalService, router) {
    this.produtoService = produtoService;
    this.notaFiscalService = notaFiscalService;
    this.router = router;
    afterNextRender4(() => {
      this.carregarProdutos();
      this.carregarNotas();
    });
  }
  produtoService;
  notaFiscalService;
  router;
  produtos = [];
  notas = [];
  itens = [];
  produtoSelecionadoId = null;
  quantidadeSelecionada = 1;
  erro = "";
  sucesso = "";
  salvando = false;
  processandoImpressaoId = null;
  carregarProdutos() {
    this.produtoService.listar().subscribe({
      next: (dados) => {
        this.produtos = dados;
      },
      error: () => {
        this.erro = "Erro ao carregar os produtos dispon\xEDveis.";
      }
    });
  }
  carregarNotas() {
    this.notaFiscalService.listar().subscribe((dados) => {
      this.notas = dados;
    });
  }
  adicionarItem() {
    if (!this.produtoSelecionadoId || this.quantidadeSelecionada <= 0) {
      this.erro = "Selecione um produto e informe uma quantidade v\xE1lida.";
      return;
    }
    const produto = this.produtos.find((p) => p.id === this.produtoSelecionadoId);
    if (!produto) {
      this.erro = "Produto n\xE3o encontrado.";
      return;
    }
    const jaSelecionado = this.itens.filter((item) => item.produto_id === this.produtoSelecionadoId).reduce((total, item) => total + item.quantidade, 0);
    if (produto.saldo < jaSelecionado + this.quantidadeSelecionada) {
      this.erro = `Saldo insuficiente para o produto ${produto.descricao}. Dispon\xEDvel: ${produto.saldo}.`;
      return;
    }
    const itemExistente = this.itens.find((item) => item.produto_id === this.produtoSelecionadoId);
    if (itemExistente) {
      itemExistente.quantidade += this.quantidadeSelecionada;
    } else {
      this.itens.push({
        produto_id: this.produtoSelecionadoId,
        quantidade: this.quantidadeSelecionada
      });
    }
    this.erro = "";
    this.sucesso = "";
    this.produtoSelecionadoId = null;
    this.quantidadeSelecionada = 1;
  }
  removerItem(index) {
    this.itens.splice(index, 1);
  }
  nomeProduto(id) {
    const produto = this.produtos.find((p) => p.id === id);
    return produto ? `${produto.codigo} - ${produto.descricao}` : "";
  }
  salvarNota() {
    if (this.itens.length === 0) {
      this.erro = "Inclua ao menos um produto na nota fiscal.";
      return;
    }
    this.salvando = true;
    this.erro = "";
    this.sucesso = "";
    this.notaFiscalService.criar(this.itens).subscribe({
      next: () => {
        this.itens = [];
        this.produtoSelecionadoId = null;
        this.quantidadeSelecionada = 1;
        this.salvando = false;
        this.sucesso = "Nota fiscal criada com status Aberta.";
        this.carregarProdutos();
        this.carregarNotas();
      },
      error: (e) => {
        this.salvando = false;
        this.erro = e?.error?.erro || "Erro ao criar nota fiscal.";
      }
    });
  }
  imprimirNota(nota) {
    if (nota.status !== "Aberta") {
      this.erro = "Somente notas com status Aberta podem ser impressas.";
      return;
    }
    this.processandoImpressaoId = nota.id;
    this.erro = "";
    this.sucesso = "";
    this.notaFiscalService.imprimir(nota.id).subscribe({
      next: (res) => {
        this.sucesso = res?.mensagem || "Nota impressa com sucesso.";
        this.carregarProdutos();
        this.carregarNotas();
      },
      error: (e) => {
        this.erro = e?.error?.erro || "Erro ao imprimir a nota fiscal.";
      },
      complete: () => {
        this.processandoImpressaoId = null;
      }
    });
  }
  voltarParaNotas() {
    this.router.navigate(["/notas-fiscais"]);
  }
  static \u0275fac = function NotaFiscalNovaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotaFiscalNovaComponent)(i06.\u0275\u0275directiveInject(ProdutoService), i06.\u0275\u0275directiveInject(NotaFiscalService), i06.\u0275\u0275directiveInject(i33.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _NotaFiscalNovaComponent, selectors: [["app-nota-fiscal-nova"]], decls: 32, vars: 7, consts: [[1, "nota-fiscal-page"], [1, "header-row"], [1, "eyebrow"], ["type", "button", 1, "secondary-btn", 3, "click"], [1, "card"], [1, "form-grid"], [3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], [1, "actions-row"], ["type", "button", 1, "primary-btn", 3, "click"], ["class", "card", 4, "ngIf"], [1, "card", "notas-list"], [1, "section-title-row"], ["class", "empty-state", 4, "ngIf"], ["class", "nota-list", 4, "ngIf"], ["class", "erro", 4, "ngIf"], ["class", "sucesso", 4, "ngIf"], ["class", "itens-table", 4, "ngIf"], ["class", "save-row", 4, "ngIf"], [1, "erro"], [1, "sucesso"], [1, "itens-table"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "danger-btn", 3, "click"], [1, "save-row"], ["type", "button", 1, "primary-btn", 3, "click", "disabled"], [1, "empty-state"], [1, "nota-list"], ["class", "nota-item", 4, "ngFor", "ngForOf"], [1, "nota-item"], [1, "nota-main"], ["class", "nota-itens", 4, "ngIf"], [1, "nota-actions"], [1, "nota-itens"]], template: function NotaFiscalNovaComponent_Template(rf, ctx) {
    if (rf & 1) {
      i06.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "p", 2);
      i06.\u0275\u0275text(4, "Notas fiscais");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(5, "h2");
      i06.\u0275\u0275text(6, "Nova Nota Fiscal");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(7, "button", 3);
      i06.\u0275\u0275listener("click", function NotaFiscalNovaComponent_Template_button_click_7_listener() {
        return ctx.voltarParaNotas();
      });
      i06.\u0275\u0275text(8, " Ver notas ");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "label")(12, "span");
      i06.\u0275\u0275text(13, "Produto cadastrado");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(14, "select", 6);
      i06.\u0275\u0275twoWayListener("ngModelChange", function NotaFiscalNovaComponent_Template_select_ngModelChange_14_listener($event) {
        i06.\u0275\u0275twoWayBindingSet(ctx.produtoSelecionadoId, $event) || (ctx.produtoSelecionadoId = $event);
        return $event;
      });
      i06.\u0275\u0275elementStart(15, "option", 7);
      i06.\u0275\u0275text(16, "Selecione um produto");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275template(17, NotaFiscalNovaComponent_option_17_Template, 2, 4, "option", 8);
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275controlCreate();
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(18, "label")(19, "span");
      i06.\u0275\u0275text(20, "Quantidade");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(21, "input", 9);
      i06.\u0275\u0275twoWayListener("ngModelChange", function NotaFiscalNovaComponent_Template_input_ngModelChange_21_listener($event) {
        i06.\u0275\u0275twoWayBindingSet(ctx.quantidadeSelecionada, $event) || (ctx.quantidadeSelecionada = $event);
        return $event;
      });
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275controlCreate();
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(22, "div", 10)(23, "button", 11);
      i06.\u0275\u0275listener("click", function NotaFiscalNovaComponent_Template_button_click_23_listener() {
        return ctx.adicionarItem();
      });
      i06.\u0275\u0275text(24, " + Adicionar produto ");
      i06.\u0275\u0275elementEnd()()();
      i06.\u0275\u0275template(25, NotaFiscalNovaComponent_div_25_Template, 7, 4, "div", 12);
      i06.\u0275\u0275elementStart(26, "div", 13)(27, "div", 14)(28, "h3");
      i06.\u0275\u0275text(29, "Notas cadastradas");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275template(30, NotaFiscalNovaComponent_div_30_Template, 2, 0, "div", 15)(31, NotaFiscalNovaComponent_div_31_Template, 2, 1, "div", 16);
      i06.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i06.\u0275\u0275advance(14);
      i06.\u0275\u0275twoWayProperty("ngModel", ctx.produtoSelecionadoId);
      i06.\u0275\u0275control();
      i06.\u0275\u0275advance();
      i06.\u0275\u0275property("ngValue", null);
      i06.\u0275\u0275advance(2);
      i06.\u0275\u0275property("ngForOf", ctx.produtos);
      i06.\u0275\u0275advance(4);
      i06.\u0275\u0275twoWayProperty("ngModel", ctx.quantidadeSelecionada);
      i06.\u0275\u0275control();
      i06.\u0275\u0275advance(4);
      i06.\u0275\u0275property("ngIf", ctx.itens.length > 0 || ctx.erro || ctx.sucesso);
      i06.\u0275\u0275advance(5);
      i06.\u0275\u0275property("ngIf", ctx.notas.length === 0);
      i06.\u0275\u0275advance();
      i06.\u0275\u0275property("ngIf", ctx.notas.length > 0);
    }
  }, dependencies: [CommonModule4, i4.NgClass, i4.NgComponentOutlet, i4.NgForOf, i4.NgIf, i4.NgTemplateOutlet, i4.NgStyle, i4.NgSwitch, i4.NgSwitchCase, i4.NgSwitchDefault, i4.NgPlural, i4.NgPluralCase, FormsModule2, i5.\u0275NgNoValidate, i5.NgSelectOption, i5.\u0275NgSelectMultipleOption, i5.DefaultValueAccessor, i5.NumberValueAccessor, i5.RangeValueAccessor, i5.CheckboxControlValueAccessor, i5.SelectControlValueAccessor, i5.SelectMultipleControlValueAccessor, i5.RadioControlValueAccessor, i5.NgControlStatus, i5.NgControlStatusGroup, i5.RequiredValidator, i5.MinLengthValidator, i5.MaxLengthValidator, i5.PatternValidator, i5.CheckboxRequiredValidator, i5.EmailValidator, i5.MinValidator, i5.MaxValidator, i5.NgModel, i5.NgModelGroup, i5.NgForm, i4.AsyncPipe, i4.UpperCasePipe, i4.LowerCasePipe, i4.JsonPipe, i4.SlicePipe, i4.DecimalPipe, i4.PercentPipe, i4.TitleCasePipe, i4.CurrencyPipe, i4.DatePipe, i4.I18nPluralPipe, i4.I18nSelectPipe, i4.KeyValuePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100%;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #e5eefb;\n}\n.nota-fiscal-page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 40px 20px 80px;\n}\n.header-row[_ngcontent-%COMP%], \n.section-title-row[_ngcontent-%COMP%], \n.actions-row[_ngcontent-%COMP%], \n.save-row[_ngcontent-%COMP%], \n.nota-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #93c5fd;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #f3f7ff;\n}\n.card[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.72);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 18px;\n  padding: 24px;\n  margin-top: 24px;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.2);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(160px, 1fr);\n  gap: 18px;\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 600;\n  color: #cbd5e1;\n}\nselect[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \nbutton[_ngcontent-%COMP%] {\n  font: inherit;\n}\nselect[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(15, 23, 42, 0.8);\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  border-radius: 10px;\n  padding: 12px 14px;\n  color: #f8fbff;\n  box-sizing: border-box;\n}\nselect[_ngcontent-%COMP%]:focus, \ninput[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(96, 165, 250, 0.6);\n  outline-offset: 2px;\n}\n.primary-btn[_ngcontent-%COMP%], \n.secondary-btn[_ngcontent-%COMP%], \n.danger-btn[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  padding: 11px 18px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.primary-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f8cff,\n      #7c3aed);\n  color: white;\n  box-shadow: 0 8px 16px rgba(79, 140, 255, 0.28);\n}\n.secondary-btn[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.12);\n  color: #e2e8f0;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n}\n.danger-btn[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.14);\n  color: #fca5a5;\n  border: 1px solid rgba(248, 113, 113, 0.2);\n}\n.primary-btn[_ngcontent-%COMP%]:hover, \n.secondary-btn[_ngcontent-%COMP%]:hover, \n.danger-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.itens-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 20px;\n}\n.itens-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.itens-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 14px 10px;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.15);\n}\n.itens-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #93c5fd;\n  font-size: 0.82rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.erro[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  color: #fca5a5;\n  font-weight: 600;\n}\n.sucesso[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  color: #86efac;\n  font-weight: 600;\n}\n.empty-state[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  color: #94a3b8;\n}\n.nota-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 20px;\n}\n.nota-item[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.16);\n  border-radius: 16px;\n  background: rgba(15, 23, 42, 0.5);\n  padding: 18px;\n}\n.nota-main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.nota-main[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f3f7ff;\n}\n.status[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 12px;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.status-aberta[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.14);\n  color: #bfdbfe;\n}\n.status-fechada[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.14);\n  color: #bbf7d0;\n}\n.nota-itens[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  color: #cbd5e1;\n  line-height: 1.8;\n}\n@media (max-width: 768px) {\n  .header-row[_ngcontent-%COMP%], \n   .section-title-row[_ngcontent-%COMP%], \n   .save-row[_ngcontent-%COMP%], \n   .nota-actions[_ngcontent-%COMP%], \n   .actions-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .primary-btn[_ngcontent-%COMP%], \n   .secondary-btn[_ngcontent-%COMP%], \n   .danger-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=nota-fiscal-nova.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(NotaFiscalNovaComponent, [{
    type: Component4,
    args: [{ selector: "app-nota-fiscal-nova", standalone: true, imports: [CommonModule4, FormsModule2], template: `<section class="nota-fiscal-page">\r
  <div class="header-row">\r
    <div>\r
      <p class="eyebrow">Notas fiscais</p>\r
      <h2>Nova Nota Fiscal</h2>\r
    </div>\r
    <button class="secondary-btn" type="button" (click)="voltarParaNotas()">\r
      Ver notas\r
    </button>\r
  </div>\r
\r
  <div class="card">\r
    <div class="form-grid">\r
      <label>\r
        <span>Produto cadastrado</span>\r
        <select [(ngModel)]="produtoSelecionadoId">\r
          <option [ngValue]="null">Selecione um produto</option>\r
          <option *ngFor="let p of produtos" [ngValue]="p.id">\r
            {{ p.codigo }} - {{ p.descricao }} (saldo: {{ p.saldo }})\r
          </option>\r
        </select>\r
      </label>\r
\r
      <label>\r
        <span>Quantidade</span>\r
        <input type="number" min="1" [(ngModel)]="quantidadeSelecionada" />\r
      </label>\r
    </div>\r
\r
    <div class="actions-row">\r
      <button class="primary-btn" type="button" (click)="adicionarItem()">\r
        + Adicionar produto\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="card" *ngIf="itens.length > 0 || erro || sucesso">\r
    <h3>Produtos da nota</h3>\r
\r
    <p class="erro" *ngIf="erro">{{ erro }}</p>\r
    <p class="sucesso" *ngIf="sucesso">{{ sucesso }}</p>\r
\r
    <table class="itens-table" *ngIf="itens.length > 0">\r
      <thead>\r
        <tr>\r
          <th>Produto</th>\r
          <th>Quantidade</th>\r
          <th>A\xE7\xF5es</th>\r
        </tr>\r
      </thead>\r
      <tbody>\r
        <tr *ngFor="let item of itens; let i = index">\r
          <td>{{ nomeProduto(item.produto_id) }}</td>\r
          <td>{{ item.quantidade }}</td>\r
          <td>\r
            <button class="danger-btn" type="button" (click)="removerItem(i)">Remover</button>\r
          </td>\r
        </tr>\r
      </tbody>\r
    </table>\r
\r
    <div class="save-row" *ngIf="itens.length > 0">\r
      <button class="primary-btn" type="button" (click)="salvarNota()" [disabled]="salvando">\r
        {{ salvando ? 'Salvando...' : 'Salvar Nota (status: Aberta)' }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="card notas-list">\r
    <div class="section-title-row">\r
      <h3>Notas cadastradas</h3>\r
    </div>\r
\r
    <div *ngIf="notas.length === 0" class="empty-state">\r
      Nenhuma nota fiscal cadastrada ainda.\r
    </div>\r
\r
    <div *ngIf="notas.length > 0" class="nota-list">\r
      <div class="nota-item" *ngFor="let nota of notas">\r
        <div class="nota-main">\r
          <div>\r
            <strong>Nota n\xBA {{ nota.numero }}</strong>\r
            <span class="status status-{{ nota.status | lowercase }}">{{ nota.status }}</span>\r
          </div>\r
        </div>\r
\r
        <div class="nota-itens" *ngIf="nota.itens?.length">\r
          <ul>\r
            <li *ngFor="let item of nota.itens">\r
              {{ item.codigo }} - {{ item.descricao }} \xB7 {{ item.quantidade }} unidade(s)\r
            </li>\r
          </ul>\r
        </div>\r
\r
        <div class="nota-actions">\r
          <button\r
            class="primary-btn"\r
            type="button"\r
            (click)="imprimirNota(nota)"\r
            [disabled]="nota.status !== 'Aberta' || processandoImpressaoId === nota.id"\r
          >\r
            {{ processandoImpressaoId === nota.id ? 'Processando...' : 'Imprimir' }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/pages/nota-fiscal-nova/nota-fiscal-nova.css */\n:host {\n  display: block;\n  min-height: 100%;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #e5eefb;\n}\n.nota-fiscal-page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 40px 20px 80px;\n}\n.header-row,\n.section-title-row,\n.actions-row,\n.save-row,\n.nota-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #93c5fd;\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\nh2,\nh3 {\n  margin: 0;\n  color: #f3f7ff;\n}\n.card {\n  background: rgba(15, 23, 42, 0.72);\n  border: 1px solid rgba(148, 163, 184, 0.18);\n  border-radius: 18px;\n  padding: 24px;\n  margin-top: 24px;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.2);\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(160px, 1fr);\n  gap: 18px;\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-weight: 600;\n  color: #cbd5e1;\n}\nselect,\ninput,\nbutton {\n  font: inherit;\n}\nselect,\ninput {\n  width: 100%;\n  background: rgba(15, 23, 42, 0.8);\n  border: 1px solid rgba(148, 163, 184, 0.3);\n  border-radius: 10px;\n  padding: 12px 14px;\n  color: #f8fbff;\n  box-sizing: border-box;\n}\nselect:focus,\ninput:focus {\n  outline: 2px solid rgba(96, 165, 250, 0.6);\n  outline-offset: 2px;\n}\n.primary-btn,\n.secondary-btn,\n.danger-btn {\n  border: none;\n  border-radius: 10px;\n  padding: 11px 18px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.primary-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #4f8cff,\n      #7c3aed);\n  color: white;\n  box-shadow: 0 8px 16px rgba(79, 140, 255, 0.28);\n}\n.secondary-btn {\n  background: rgba(148, 163, 184, 0.12);\n  color: #e2e8f0;\n  border: 1px solid rgba(148, 163, 184, 0.2);\n}\n.danger-btn {\n  background: rgba(239, 68, 68, 0.14);\n  color: #fca5a5;\n  border: 1px solid rgba(248, 113, 113, 0.2);\n}\n.primary-btn:hover,\n.secondary-btn:hover,\n.danger-btn:hover {\n  transform: translateY(-2px);\n}\nbutton:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.itens-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 20px;\n}\n.itens-table th,\n.itens-table td {\n  text-align: left;\n  padding: 14px 10px;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.15);\n}\n.itens-table th {\n  color: #93c5fd;\n  font-size: 0.82rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.erro {\n  margin: 12px 0 0;\n  color: #fca5a5;\n  font-weight: 600;\n}\n.sucesso {\n  margin: 12px 0 0;\n  color: #86efac;\n  font-weight: 600;\n}\n.empty-state {\n  margin-top: 16px;\n  color: #94a3b8;\n}\n.nota-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 20px;\n}\n.nota-item {\n  border: 1px solid rgba(148, 163, 184, 0.16);\n  border-radius: 16px;\n  background: rgba(15, 23, 42, 0.5);\n  padding: 18px;\n}\n.nota-main {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.nota-main strong {\n  color: #f3f7ff;\n}\n.status {\n  display: inline-block;\n  margin-left: 12px;\n  padding: 6px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n.status-aberta {\n  background: rgba(59, 130, 246, 0.14);\n  color: #bfdbfe;\n}\n.status-fechada {\n  background: rgba(34, 197, 94, 0.14);\n  color: #bbf7d0;\n}\n.nota-itens ul {\n  margin: 0;\n  padding-left: 18px;\n  color: #cbd5e1;\n  line-height: 1.8;\n}\n@media (max-width: 768px) {\n  .header-row,\n  .section-title-row,\n  .save-row,\n  .nota-actions,\n  .actions-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .form-grid {\n    grid-template-columns: 1fr;\n  }\n  .primary-btn,\n  .secondary-btn,\n  .danger-btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=nota-fiscal-nova.css.map */\n'] }]
  }], () => [{ type: ProdutoService }, { type: NotaFiscalService }, { type: i33.Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(NotaFiscalNovaComponent, { className: "NotaFiscalNovaComponent", filePath: "src/app/pages/nota-fiscal-nova/nota-fiscal-nova.component.ts", lineNumber: 16 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fnota-fiscal-nova%2Fnota-fiscal-nova.component.ts%40NotaFiscalNovaComponent";
  function NotaFiscalNovaComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i06.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i06.\u0275\u0275replaceMetadata(NotaFiscalNovaComponent, m.default, [i06, i4, i5, produto_service_exports, nota_fiscal_service_exports, i33], [CommonModule4, FormsModule2, Component4], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && NotaFiscalNovaComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && NotaFiscalNovaComponent_HmrLoad(d.timestamp)));
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: HomeComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: "notas-fiscais", component: NotasFiscaisComponent },
  { path: "notas-fiscais/nova", component: NotaFiscalNovaComponent }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};

// src/app/app.ts
import { Component as Component5, signal } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
import { RouterOutlet } from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_router.js?v=df08ab4b";
import * as i07 from "/@fs/C:/Users/Usuário/Documents/GitHub/Emissão_de_notas_fiscais/frontend/.angular/cache/22.1.4/frontend/vite/deps/@angular_core.js?v=df08ab4b";
var App = class _App {
  title = signal(
    "frontend",
    ...ngDevMode ? [{ debugName: "title" }] : (
      /* istanbul ignore next */
      []
    )
  );
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      i07.\u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(App, [{
    type: Component5,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: "<router-outlet></router-outlet>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.ts%40App";
  function App_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i07.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i07.\u0275\u0275replaceMetadata(App, m.default, [i07], [RouterOutlet, Component5], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && App_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && App_HmrLoad(d.timestamp)));
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# debugId=23eaad0f-a314-59c0-8d91-db00098407b2


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuaHRtbCIsInNyYy9hcHAvc2VydmljZXMvcHJvZHV0by5zZXJ2aWNlLnRzIiwic3JjL2FwcC9zZXJ2aWNlcy9wcm9kdXRvLnRzIiwic3JjL2FwcC9wYWdlcy9wcm9kdXRvcy9wcm9kdXRvcy5jb21wb25lbnQudHMiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1dG9zL3Byb2R1dG9zLmh0bWwiLCJzcmMvYXBwL3BhZ2VzL25vdGFzLWZpc2NhaXMvbm90YXMtZmlzY2Fpcy5jb21wb25lbnQudHMiLCJzcmMvYXBwL3BhZ2VzL25vdGFzLWZpc2NhaXMvbm90YXMtZmlzY2Fpcy5odG1sIiwic3JjL2FwcC9zZXJ2aWNlcy9ub3RhLWZpc2NhbC5zZXJ2aWNlLnRzIiwic3JjL2FwcC9zZXJ2aWNlcy9ub3RhLWZpc2NhbC50cyIsInNyYy9hcHAvcGFnZXMvbm90YS1maXNjYWwtbm92YS9ub3RhLWZpc2NhbC1ub3ZhLmNvbXBvbmVudC50cyIsInNyYy9hcHAvcGFnZXMvbm90YS1maXNjYWwtbm92YS9ub3RhLWZpc2NhbC1ub3ZhLmh0bWwiLCJzcmMvYXBwL2FwcC5yb3V0ZXMudHMiLCJzcmMvYXBwL2FwcC50cyIsInNyYy9hcHAvYXBwLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd6b25lLmpzJztcclxuaW1wb3J0IHsgYm9vdHN0cmFwQXBwbGljYXRpb24gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgYXBwQ29uZmlnIH0gZnJvbSAnLi9hcHAvYXBwLmNvbmZpZyc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwL2FwcCc7XHJcblxyXG5ib290c3RyYXBBcHBsaWNhdGlvbihBcHAsIGFwcENvbmZpZylcclxuICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuIiwiaW1wb3J0IHsgQXBwbGljYXRpb25Db25maWcsIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHByb3ZpZGVSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBwcm92aWRlSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgYXBwQ29uZmlnOiBBcHBsaWNhdGlvbkNvbmZpZyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHByb3ZpZGVab25lQ2hhbmdlRGV0ZWN0aW9uKHsgZXZlbnRDb2FsZXNjaW5nOiB0cnVlIH0pLFxyXG4gICAgcHJvdmlkZVJvdXRlcihyb3V0ZXMpLFxyXG4gICAgcHJvdmlkZUh0dHBDbGllbnQoKSxcclxuICBdXHJcbn07IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBhZnRlck5leHRSZW5kZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyTGluayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFByb2R1dG9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvZHV0by5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUHJvZHV0byB9IGZyb20gJy4uLy4uL21vZGVscy9tb2RlbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJMaW5rXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5odG1sJyxcclxuICBzdHlsZVVybDogJy4vaG9tZS5jc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcbiAgcHJvZHV0b3M6IFByb2R1dG9bXSA9IFtdO1xyXG4gIGNhcnJlZ2FuZG8gPSBmYWxzZTtcclxuICBlcnJvID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHV0b1NlcnZpY2U6IFByb2R1dG9TZXJ2aWNlKSB7XHJcbiAgICAvLyBhZnRlck5leHRSZW5kZXIgZ2FyYW50ZSBleGVjdcOnw6NvIGFwZW5hcyBubyBuYXZlZ2Fkb3IgKGNsaWVudGUpLFxyXG4gICAgLy8gbWVzbW8gY29tIFNTUi9oaWRyYXRhw6fDo28sIGNhcnJlZ2FuZG8gb3MgcHJvZHV0b3MgYXV0b21hdGljYW1lbnRlLlxyXG4gICAgYWZ0ZXJOZXh0UmVuZGVyKCgpID0+IHtcclxuICAgICAgdGhpcy5jYXJyZWdhcigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjYXJyZWdhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FycmVnYW5kbyA9IHRydWU7XHJcbiAgICB0aGlzLnByb2R1dG9TZXJ2aWNlLmxpc3RhcigpLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IChkYWRvczogUHJvZHV0b1tdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9kdXRvcyA9IGRhZG9zO1xyXG4gICAgICAgIHRoaXMuY2FycmVnYW5kbyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXJybyA9ICcnO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FycmVnYW5kbyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXJybyA9ICdFcnJvIGFvIGNhcnJlZ2FyIHByb2R1dG9zLiBWZXJpZmlxdWUgc2UgbyBiYWNrZW5kIGVzdMOhIHJvZGFuZG8uJztcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyOicsIGUpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxzZWN0aW9uIGNsYXNzPVwiaG9tZS1wYWdlXCI+XHJcbiAgPGRpdiBjbGFzcz1cImhlcm8tc2VjdGlvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImhlcm8tY29udGVudFwiPlxyXG4gICAgICA8aDE+QmVtLXZpbmRvPC9oMT5cclxuICAgICAgPHA+R2VyZW5jaWUgc2V1cyBwcm9kdXRvcyBlIG5vdGFzIGZpc2NhaXMgZGUgZm9ybWEgZWZpY2llbnRlPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRlclwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5Qcm9kdXRvcyBEaXNwb27DrXZlaXM8L2gyPlxyXG4gICAgICAgIDxwPlRvdGFsIGRlIHt7IHByb2R1dG9zLmxlbmd0aCB9fSBwcm9kdXRvKHMpIGNhZGFzdHJhZG8ocyk8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9ucy1ncm91cFwiPlxyXG4gICAgICAgIDxhIHJvdXRlckxpbms9XCIvbm90YXMtZmlzY2Fpcy9ub3ZhXCIgY2xhc3M9XCJidG4tYWRkXCI+KyBDcmlhciBOb3RhIEZpc2NhbDwvYT5cclxuICAgICAgICA8YSByb3V0ZXJMaW5rPVwiL3Byb2R1dG9zXCIgY2xhc3M9XCJidG4tYWRkXCI+KyBBZGljaW9uYXIgUHJvZHV0bzwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwiY2FycmVnYW5kb1wiIGNsYXNzPVwibG9hZGluZ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjwvZGl2PlxyXG4gICAgICA8cD5DYXJyZWdhbmRvIHByb2R1dG9zLi4uPC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiAqbmdJZj1cImVycm9cIiBjbGFzcz1cImVycm9yLWJhbm5lclwiPlxyXG4gICAgICB7eyBlcnJvIH19XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwiIWNhcnJlZ2FuZG8gJiYgcHJvZHV0b3MubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJlbXB0eS1zdGF0ZVwiPlxyXG4gICAgICA8c3ZnIHdpZHRoPVwiNjRcIiBoZWlnaHQ9XCI2NFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxyXG4gICAgICAgIDxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOG0zLjUtOWMuODMgMCAxLjUtLjY3IDEuNS0xLjVTMTYuMzMgOCAxNS41IDggMTQgOC42NyAxNCA5LjVzLjY3IDEuNSAxLjUgMS41bS03IDBjLjgzIDAgMS41LS42NyAxLjUtMS41UzkuMzMgOCA4LjUgOCA3IDguNjcgNyA5LjUgNy42NyAxMSA4LjUgMTFtMy41IDYuNWMyLjMzIDAgNC4zMS0xLjQ2IDUuMTEtMy41SDYuODljLjggMi4wNCAyLjc4IDMuNSA1LjExIDMuNXpcIj48L3BhdGg+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgICA8aDM+TmVuaHVtIHByb2R1dG8gY2FkYXN0cmFkbzwvaDM+XHJcbiAgICAgIDxwPkNvbWVjZSA8YSByb3V0ZXJMaW5rPVwiL3Byb2R1dG9zXCI+Y3JpYW5kbyB1bSBub3ZvIHByb2R1dG88L2E+PC9wPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiAqbmdJZj1cIiFjYXJyZWdhbmRvICYmIHByb2R1dG9zLmxlbmd0aCA+IDBcIiBjbGFzcz1cInByb2R1Y3RzLWdyaWRcIj5cclxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgcHJvZHV0byBvZiBwcm9kdXRvc1wiIGNsYXNzPVwicHJvZHVjdC1jYXJkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvZGUtYmFkZ2VcIj57eyBwcm9kdXRvLmNvZGlnbyB9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8aDM+e3sgcHJvZHV0by5kZXNjcmljYW8gfX08L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0b2NrLWluZm9cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlNhbGRvOjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPnt7IHByb2R1dG8uc2FsZG8gfX0gdW5pZGFkZShzKTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgPGEgcm91dGVyTGluaz1cIi9wcm9kdXRvc1wiIGNsYXNzPVwibGluay1idG5cIj5HZXJlbmNpYXI8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuIiwiZXhwb3J0IHsgUHJvZHV0b1NlcnZpY2UgfSBmcm9tICcuL3Byb2R1dG8nO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRpbWVvdXQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFByb2R1dG8gfSBmcm9tICcuLi9tb2RlbHMvbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdXRvU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDgxL3Byb2R1dG9zJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBsaXN0YXIoKTogT2JzZXJ2YWJsZTxQcm9kdXRvW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFByb2R1dG9bXT4odGhpcy5hcGlVcmwpLnBpcGUoXHJcbiAgICAgIHRpbWVvdXQoMTAwMDApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JpYXIocHJvZHV0bzogUHJvZHV0byk6IE9ic2VydmFibGU8UHJvZHV0bz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFByb2R1dG8+KHRoaXMuYXBpVXJsLCBwcm9kdXRvKTtcclxuICB9XHJcblxyXG4gIGF0dWFsaXphcihpZDogbnVtYmVyLCBwcm9kdXRvOiBQcm9kdXRvKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke3RoaXMuYXBpVXJsfS8ke2lkfWAsIHByb2R1dG8pO1xyXG4gIH1cclxuXHJcbiAgZXhjbHVpcihpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuYXBpVXJsfS8ke2lkfWApO1xyXG4gIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCwgYWZ0ZXJOZXh0UmVuZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBQcm9kdXRvU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2R1dG8uc2VydmljZSc7XHJcbmltcG9ydCB7IFByb2R1dG8gfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9kZWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXByb2R1dG9zJyxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHV0b3MuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3Byb2R1dG9zLmNzcycsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9kdXRvc0NvbXBvbmVudCB7XHJcbiAgcHJvZHV0b3M6IFByb2R1dG9bXSA9IFtdO1xyXG4gIG5vdm9Qcm9kdXRvOiBQcm9kdXRvID0geyBjb2RpZ286ICcnLCBkZXNjcmljYW86ICcnLCBzYWxkbzogMCB9O1xyXG4gIGVycm8gPSAnJztcclxuICBlZGl0YW5kb0lkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBjYXJyZWdhbmRvID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJvZHV0b1NlcnZpY2U6IFByb2R1dG9TZXJ2aWNlKSB7XHJcbiAgICAvLyBhZnRlck5leHRSZW5kZXIgZ2FyYW50ZSBleGVjdcOnw6NvIGFwZW5hcyBubyBuYXZlZ2Fkb3IgKGNsaWVudGUpLFxyXG4gICAgLy8gbWVzbW8gY29tIFNTUi9oaWRyYXRhw6fDo28sIGNhcnJlZ2FuZG8gb3MgcHJvZHV0b3MgYXV0b21hdGljYW1lbnRlLlxyXG4gICAgYWZ0ZXJOZXh0UmVuZGVyKCgpID0+IHtcclxuICAgICAgdGhpcy5jYXJyZWdhcigpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjYXJyZWdhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FycmVnYW5kbyA9IHRydWU7XHJcbiAgICB0aGlzLnByb2R1dG9TZXJ2aWNlLmxpc3RhcigpLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IChkYWRvczogUHJvZHV0b1tdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9kdXRvcyA9IGRhZG9zO1xyXG4gICAgICAgIHRoaXMuY2FycmVnYW5kbyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXJybyA9ICcnO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FycmVnYW5kbyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXJybyA9ICdFcnJvIGFvIGNhcnJlZ2FyIHByb2R1dG9zLiBWZXJpZmlxdWUgc2UgbyBiYWNrZW5kIGVzdMOhIHJvZGFuZG8uJztcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyOicsIGUpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNldEZvcm0oKTogdm9pZCB7XHJcbiAgICB0aGlzLm5vdm9Qcm9kdXRvID0geyBjb2RpZ286ICcnLCBkZXNjcmljYW86ICcnLCBzYWxkbzogMCB9O1xyXG4gICAgdGhpcy5lZGl0YW5kb0lkID0gbnVsbDtcclxuICAgIHRoaXMuZXJybyA9ICcnO1xyXG4gIH1cclxuXHJcbiAgc2FsdmFyKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm5vdm9Qcm9kdXRvLmNvZGlnbyB8fCAhdGhpcy5ub3ZvUHJvZHV0by5kZXNjcmljYW8pIHtcclxuICAgICAgdGhpcy5lcnJvID0gJ0PDs2RpZ28gZSBkZXNjcmnDp8OjbyBzw6NvIG9icmlnYXTDs3Jpb3MuJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBheWxvYWQ6IFByb2R1dG8gPSB7XHJcbiAgICAgIC4uLnRoaXMubm92b1Byb2R1dG8sXHJcbiAgICAgIHNhbGRvOiBOdW1iZXIodGhpcy5ub3ZvUHJvZHV0by5zYWxkbykgfHwgMCxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb3BlcmFjYW8gPSB0aGlzLmVkaXRhbmRvSWQgIT09IG51bGxcclxuICAgICAgPyB0aGlzLnByb2R1dG9TZXJ2aWNlLmF0dWFsaXphcih0aGlzLmVkaXRhbmRvSWQsIHBheWxvYWQpXHJcbiAgICAgIDogdGhpcy5wcm9kdXRvU2VydmljZS5jcmlhcihwYXlsb2FkKTtcclxuXHJcbiAgICBvcGVyYWNhby5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcclxuICAgICAgICB0aGlzLmNhcnJlZ2FyKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZTogYW55KSA9PiAodGhpcy5lcnJvID0gZS5lcnJvcj8uZXJybyB8fCAnRXJybyBhbyBzYWx2YXIgcHJvZHV0by4nKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlZGl0YXIocHJvZHV0bzogUHJvZHV0byk6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0YW5kb0lkID0gcHJvZHV0by5pZCA/PyBudWxsO1xyXG4gICAgdGhpcy5ub3ZvUHJvZHV0byA9IHtcclxuICAgICAgLi4ucHJvZHV0byxcclxuICAgICAgY29kaWdvOiBwcm9kdXRvLmNvZGlnbyxcclxuICAgICAgZGVzY3JpY2FvOiBwcm9kdXRvLmRlc2NyaWNhbyxcclxuICAgICAgc2FsZG86IHByb2R1dG8uc2FsZG8gPz8gMCxcclxuICAgIH07XHJcbiAgICB0aGlzLmVycm8gPSAnJztcclxuICB9XHJcblxyXG4gIGNhbmNlbGFyRWRpY2FvKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNldEZvcm0oKTtcclxuICB9XHJcblxyXG4gIGV4Y2x1aXIoaWQ/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghaWQpIHJldHVybjtcclxuICAgIHRoaXMucHJvZHV0b1NlcnZpY2UuZXhjbHVpcihpZCkuc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogKCkgPT4gdGhpcy5jYXJyZWdhcigpLFxyXG4gICAgICBlcnJvcjogKGU6IGFueSkgPT4gKHRoaXMuZXJybyA9IGUuZXJyb3I/LmVycm8gfHwgJ0Vycm8gYW8gZXhjbHVpciBwcm9kdXRvLicpXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPHNlY3Rpb24gY2xhc3M9XCJwcm9kdXRvcy1wYWdlXCI+XHJcbiAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgIFxyXG4gICAgICA8aDI+UHJvZHV0b3M8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3BhbiBjbGFzcz1cImJhZGdlXCI+e3sgcHJvZHV0b3MubGVuZ3RoIH19IGl0ZW5zPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBmb3JtLWNhcmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgIDxoMz57eyBlZGl0YW5kb0lkICE9PSBudWxsID8gJ0VkaXRhciBwcm9kdXRvJyA6ICdDYWRhc3RyYXIgcHJvZHV0bycgfX08L2gzPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JpZFwiPlxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxzcGFuPkPDs2RpZ288L3NwYW4+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFeDogUC0wMDFcIiBbKG5nTW9kZWwpXT1cIm5vdm9Qcm9kdXRvLmNvZGlnb1wiIC8+XHJcbiAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICA8bGFiZWwgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgIDxzcGFuPkRlc2NyacOnw6NvPC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRXg6IFRlY2xhZG8gbWVjw6JuaWNvXCIgWyhuZ01vZGVsKV09XCJub3ZvUHJvZHV0by5kZXNjcmljYW9cIiAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgPGxhYmVsIGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICA8c3Bhbj5TYWxkbzwvc3Bhbj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG1pbj1cIjBcIiBwbGFjZWhvbGRlcj1cIjBcIiBbKG5nTW9kZWwpXT1cIm5vdm9Qcm9kdXRvLnNhbGRvXCIgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCI+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJpbWFyeVwiIChjbGljayk9XCJzYWx2YXIoKVwiPlxyXG4gICAgICAgIHt7IGVkaXRhbmRvSWQgIT09IG51bGwgPyAnQXR1YWxpemFyJyA6ICdTYWx2YXInIH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzZWNvbmRhcnlcIiAqbmdJZj1cImVkaXRhbmRvSWQgIT09IG51bGxcIiAoY2xpY2spPVwiY2FuY2VsYXJFZGljYW8oKVwiPlxyXG4gICAgICAgIENhbmNlbGFyXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHAgY2xhc3M9XCJlcnJvXCIgKm5nSWY9XCJlcnJvXCI+e3sgZXJybyB9fTwvcD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNhcmQgdGFibGUtY2FyZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLWhlYWRlclwiPlxyXG4gICAgICA8aDM+TGlzdGEgZGUgcHJvZHV0b3M8L2gzPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBcIj5cclxuICAgICAgPHRhYmxlPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPkPDs2RpZ288L3RoPlxyXG4gICAgICAgICAgICA8dGg+RGVzY3Jpw6fDo288L3RoPlxyXG4gICAgICAgICAgICA8dGg+U2FsZG88L3RoPlxyXG4gICAgICAgICAgICA8dGg+QcOnw7VlczwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPHRyICpuZ0lmPVwiY2FycmVnYW5kb1wiPlxyXG4gICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjRcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMzJweDtcIj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHg7IGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjIpOyBib3JkZXItdG9wLWNvbG9yOiAjM2I4MmY2OyBib3JkZXItcmFkaXVzOiA1MCU7IGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkNhcnJlZ2FuZG8gcHJvZHV0b3MuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPHRyICpuZ0lmPVwiIWNhcnJlZ2FuZG8gJiYgcHJvZHV0b3MubGVuZ3RoID09PSAwXCI+XHJcbiAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNFwiIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAyNHB4O1wiPk5lbmh1bSBwcm9kdXRvIGNhZGFzdHJhZG88L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcCBvZiBwcm9kdXRvc1wiPlxyXG4gICAgICAgICAgICA8dGQ+e3sgcC5jb2RpZ28gfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3sgcC5kZXNjcmljYW8gfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+e3sgcC5zYWxkbyB9fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImdob3N0XCIgKGNsaWNrKT1cImVkaXRhcihwKVwiPkVkaXRhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkYW5nZXJcIiAoY2xpY2spPVwiZXhjbHVpcihwLmlkKVwiPkV4Y2x1aXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3NlY3Rpb24+IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBhZnRlck5leHRSZW5kZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTm90YUZpc2NhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3RhLWZpc2NhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90YUZpc2NhbCB9IGZyb20gJy4uLy4uL21vZGVscy9tb2RlbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbm90YXMtZmlzY2FpcycsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbm90YXMtZmlzY2Fpcy5odG1sJyxcclxuICBzdHlsZVVybDogJy4vbm90YXMtZmlzY2Fpcy5jc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90YXNGaXNjYWlzQ29tcG9uZW50IHtcclxuICBub3RhczogTm90YUZpc2NhbFtdID0gW107XHJcbiAgZXJybyA9ICcnO1xyXG4gIHN1Y2Vzc28gPSAnJztcclxuICBwcm9jZXNzYW5kb0ltcHJlc3Nhb0lkOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5vdGFGaXNjYWxTZXJ2aWNlOiBOb3RhRmlzY2FsU2VydmljZSxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICApIHtcclxuICAgIC8vIGFmdGVyTmV4dFJlbmRlciBnYXJhbnRlIGV4ZWN1w6fDo28gYXBlbmFzIG5vIG5hdmVnYWRvciAoY2xpZW50ZSksXHJcbiAgICAvLyBtZXNtbyBjb20gU1NSL2hpZHJhdGHDp8OjbywgY2FycmVnYW5kbyBhcyBub3RhcyBhdXRvbWF0aWNhbWVudGUuXHJcbiAgICBhZnRlck5leHRSZW5kZXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNhcnJlZ2FyTm90YXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FycmVnYXJOb3RhcygpOiB2b2lkIHtcclxuICAgIHRoaXMubm90YUZpc2NhbFNlcnZpY2UubGlzdGFyKCkuc3Vic2NyaWJlKHtcclxuICAgICAgbmV4dDogKGRhZG9zOiBOb3RhRmlzY2FsW10pID0+IHtcclxuICAgICAgICB0aGlzLm5vdGFzID0gZGFkb3M7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvID0gJ0Vycm8gYW8gY2FycmVnYXIgYXMgbm90YXMgZmlzY2Fpcy4nO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbXByaW1pck5vdGEobm90YTogTm90YUZpc2NhbCk6IHZvaWQge1xyXG4gICAgaWYgKG5vdGEuc3RhdHVzICE9PSAnQWJlcnRhJykge1xyXG4gICAgICB0aGlzLmVycm8gPSAnU29tZW50ZSBub3RhcyBjb20gc3RhdHVzIEFiZXJ0YSBwb2RlbSBzZXIgaW1wcmVzc2FzLic7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb2Nlc3NhbmRvSW1wcmVzc2FvSWQgPSBub3RhLmlkO1xyXG4gICAgdGhpcy5lcnJvID0gJyc7XHJcbiAgICB0aGlzLnN1Y2Vzc28gPSAnJztcclxuXHJcbiAgICB0aGlzLm5vdGFGaXNjYWxTZXJ2aWNlLmltcHJpbWlyKG5vdGEuaWQpLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3VjZXNzbyA9IHJlcz8ubWVuc2FnZW0gfHwgJ05vdGEgaW1wcmVzc2EgY29tIHN1Y2Vzc28uJztcclxuICAgICAgICB0aGlzLmNhcnJlZ2FyTm90YXMoKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmVycm8gPSBlPy5lcnJvcj8uZXJybyB8fCAnRXJybyBhbyBpbXByaW1pciBhIG5vdGEgZmlzY2FsLic7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzYW5kb0ltcHJlc3Nhb0lkID0gbnVsbDtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaXJQYXJhTm92YU5vdGEoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9ub3Rhcy1maXNjYWlzL25vdmEnXSk7XHJcbiAgfVxyXG59XHJcbiIsIjxzZWN0aW9uIGNsYXNzPVwibm90YXMtcGFnZVwiPlxyXG4gIDxkaXYgY2xhc3M9XCJoZWFkZXItcm93XCI+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzcz1cImV5ZWJyb3dcIj5Ob3RhcyBmaXNjYWlzPC9wPlxyXG4gICAgICA8aDI+Tm90YXMgQ2FkYXN0cmFkYXM8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG5cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImlyUGFyYU5vdmFOb3RhKClcIj5cclxuICAgICAgKyBDcmlhciBub3RhXHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgIDxwIGNsYXNzPVwiZXJyb1wiICpuZ0lmPVwiZXJyb1wiPnt7IGVycm8gfX08L3A+XHJcbiAgICA8cCBjbGFzcz1cInN1Y2Vzc29cIiAqbmdJZj1cInN1Y2Vzc29cIj57eyBzdWNlc3NvIH19PC9wPlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJub3Rhcy5sZW5ndGggPT09IDBcIiBjbGFzcz1cImVtcHR5LXN0YXRlXCI+XHJcbiAgICAgIE5lbmh1bWEgbm90YSBmaXNjYWwgY2FkYXN0cmFkYS5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJub3Rhcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJsaXN0YS1ub3Rhc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibm90YS1pdGVtXCIgKm5nRm9yPVwibGV0IG5vdGEgb2Ygbm90YXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibm90YS10b3BvXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3Ryb25nPk5vdGEgbsK6IHt7IG5vdGEubnVtZXJvIH19PC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdHVzIHN0YXR1cy17eyBub3RhLnN0YXR1cyB8IGxvd2VyY2FzZSB9fVwiPnt7IG5vdGEuc3RhdHVzIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3RhLWRldGFsaGVzXCIgKm5nSWY9XCJub3RhLml0ZW5zPy5sZW5ndGhcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBpdGVtIG9mIG5vdGEuaXRlbnNcIj5cclxuICAgICAgICAgICAgICB7eyBpdGVtLmNvZGlnbyB9fSAtIHt7IGl0ZW0uZGVzY3JpY2FvIH19IMK3IHt7IGl0ZW0ucXVhbnRpZGFkZSB9fSB1bmlkYWRlKHMpXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibm90YS1hY2FvXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzPVwicHJpbWFyeS1idG5cIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImltcHJpbWlyTm90YShub3RhKVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJub3RhLnN0YXR1cyAhPT0gJ0FiZXJ0YScgfHwgcHJvY2Vzc2FuZG9JbXByZXNzYW9JZCA9PT0gbm90YS5pZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt7IHByb2Nlc3NhbmRvSW1wcmVzc2FvSWQgPT09IG5vdGEuaWQgPyAnUHJvY2Vzc2FuZG8uLi4nIDogJ0ltcHJpbWlyJyB9fVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj4iLCJleHBvcnQgeyBOb3RhRmlzY2FsU2VydmljZSB9IGZyb20gJy4vbm90YS1maXNjYWwnO1xyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRpbWVvdXQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE5vdGFGaXNjYWwsIEl0ZW1Ob3RhIH0gZnJvbSAnLi4vbW9kZWxzL21vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTm90YUZpc2NhbFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgYXBpVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9ub3Rhcy1maXNjYWlzJztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBsaXN0YXIoKTogT2JzZXJ2YWJsZTxOb3RhRmlzY2FsW10+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE5vdGFGaXNjYWxbXT4odGhpcy5hcGlVcmwpLnBpcGUoXHJcbiAgICAgIHRpbWVvdXQoNTAwMCksXHJcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YoW10pKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGJ1c2NhcihpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxOb3RhRmlzY2FsPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxOb3RhRmlzY2FsPihgJHt0aGlzLmFwaVVybH0vJHtpZH1gKTtcclxuICB9XHJcblxyXG4gIGNyaWFyKGl0ZW5zOiBJdGVtTm90YVtdKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmFwaVVybCwgeyBpdGVucyB9KTtcclxuICB9XHJcblxyXG4gIGltcHJpbWlyKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuYXBpVXJsfS8ke2lkfS9pbXByaW1pcmAsIHt9KTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIGFmdGVyTmV4dFJlbmRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUHJvZHV0b1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9wcm9kdXRvLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOb3RhRmlzY2FsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGEtZmlzY2FsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9kdXRvLCBJdGVtTm90YSwgTm90YUZpc2NhbCB9IGZyb20gJy4uLy4uL21vZGVscy9tb2RlbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtbm90YS1maXNjYWwtbm92YScsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25vdGEtZmlzY2FsLW5vdmEuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL25vdGEtZmlzY2FsLW5vdmEuY3NzJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5vdGFGaXNjYWxOb3ZhQ29tcG9uZW50IHtcclxuICBwcm9kdXRvczogUHJvZHV0b1tdID0gW107XHJcbiAgbm90YXM6IE5vdGFGaXNjYWxbXSA9IFtdO1xyXG4gIGl0ZW5zOiBJdGVtTm90YVtdID0gW107XHJcbiAgcHJvZHV0b1NlbGVjaW9uYWRvSWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHF1YW50aWRhZGVTZWxlY2lvbmFkYSA9IDE7XHJcbiAgZXJybyA9ICcnO1xyXG4gIHN1Y2Vzc28gPSAnJztcclxuICBzYWx2YW5kbyA9IGZhbHNlO1xyXG4gIHByb2Nlc3NhbmRvSW1wcmVzc2FvSWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcHJvZHV0b1NlcnZpY2U6IFByb2R1dG9TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBub3RhRmlzY2FsU2VydmljZTogTm90YUZpc2NhbFNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7XHJcbiAgICAvLyBhZnRlck5leHRSZW5kZXIgZ2FyYW50ZSBleGVjdcOnw6NvIGFwZW5hcyBubyBuYXZlZ2Fkb3IgKGNsaWVudGUpLFxyXG4gICAgLy8gbWVzbW8gY29tIFNTUi9oaWRyYXRhw6fDo28sIGNhcnJlZ2FuZG8gZGFkb3MgYXV0b21hdGljYW1lbnRlLlxyXG4gICAgYWZ0ZXJOZXh0UmVuZGVyKCgpID0+IHtcclxuICAgICAgdGhpcy5jYXJyZWdhclByb2R1dG9zKCk7XHJcbiAgICAgIHRoaXMuY2FycmVnYXJOb3RhcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjYXJyZWdhclByb2R1dG9zKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9kdXRvU2VydmljZS5saXN0YXIoKS5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiAoZGFkb3M6IFByb2R1dG9bXSkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvZHV0b3MgPSBkYWRvcztcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6ICgpID0+IHtcclxuICAgICAgICB0aGlzLmVycm8gPSAnRXJybyBhbyBjYXJyZWdhciBvcyBwcm9kdXRvcyBkaXNwb27DrXZlaXMuJztcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2FycmVnYXJOb3RhcygpOiB2b2lkIHtcclxuICAgIHRoaXMubm90YUZpc2NhbFNlcnZpY2UubGlzdGFyKCkuc3Vic2NyaWJlKChkYWRvczogTm90YUZpc2NhbFtdKSA9PiB7XHJcbiAgICAgIHRoaXMubm90YXMgPSBkYWRvcztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRpY2lvbmFySXRlbSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wcm9kdXRvU2VsZWNpb25hZG9JZCB8fCB0aGlzLnF1YW50aWRhZGVTZWxlY2lvbmFkYSA8PSAwKSB7XHJcbiAgICAgIHRoaXMuZXJybyA9ICdTZWxlY2lvbmUgdW0gcHJvZHV0byBlIGluZm9ybWUgdW1hIHF1YW50aWRhZGUgdsOhbGlkYS4nO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvZHV0byA9IHRoaXMucHJvZHV0b3MuZmluZCgocCkgPT4gcC5pZCA9PT0gdGhpcy5wcm9kdXRvU2VsZWNpb25hZG9JZCk7XHJcbiAgICBpZiAoIXByb2R1dG8pIHtcclxuICAgICAgdGhpcy5lcnJvID0gJ1Byb2R1dG8gbsOjbyBlbmNvbnRyYWRvLic7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBqYVNlbGVjaW9uYWRvID0gdGhpcy5pdGVuc1xyXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnByb2R1dG9faWQgPT09IHRoaXMucHJvZHV0b1NlbGVjaW9uYWRvSWQpXHJcbiAgICAgIC5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PiB0b3RhbCArIGl0ZW0ucXVhbnRpZGFkZSwgMCk7XHJcblxyXG4gICAgaWYgKHByb2R1dG8uc2FsZG8gPCBqYVNlbGVjaW9uYWRvICsgdGhpcy5xdWFudGlkYWRlU2VsZWNpb25hZGEpIHtcclxuICAgICAgdGhpcy5lcnJvID0gYFNhbGRvIGluc3VmaWNpZW50ZSBwYXJhIG8gcHJvZHV0byAke3Byb2R1dG8uZGVzY3JpY2FvfS4gRGlzcG9uw612ZWw6ICR7cHJvZHV0by5zYWxkb30uYDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGl0ZW1FeGlzdGVudGUgPSB0aGlzLml0ZW5zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ucHJvZHV0b19pZCA9PT0gdGhpcy5wcm9kdXRvU2VsZWNpb25hZG9JZCk7XHJcbiAgICBpZiAoaXRlbUV4aXN0ZW50ZSkge1xyXG4gICAgICBpdGVtRXhpc3RlbnRlLnF1YW50aWRhZGUgKz0gdGhpcy5xdWFudGlkYWRlU2VsZWNpb25hZGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLml0ZW5zLnB1c2goe1xyXG4gICAgICAgIHByb2R1dG9faWQ6IHRoaXMucHJvZHV0b1NlbGVjaW9uYWRvSWQsXHJcbiAgICAgICAgcXVhbnRpZGFkZTogdGhpcy5xdWFudGlkYWRlU2VsZWNpb25hZGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZXJybyA9ICcnO1xyXG4gICAgdGhpcy5zdWNlc3NvID0gJyc7XHJcbiAgICB0aGlzLnByb2R1dG9TZWxlY2lvbmFkb0lkID0gbnVsbDtcclxuICAgIHRoaXMucXVhbnRpZGFkZVNlbGVjaW9uYWRhID0gMTtcclxuICB9XHJcblxyXG4gIHJlbW92ZXJJdGVtKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuaXRlbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIG5vbWVQcm9kdXRvKGlkOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcHJvZHV0byA9IHRoaXMucHJvZHV0b3MuZmluZCgocCkgPT4gcC5pZCA9PT0gaWQpO1xyXG4gICAgcmV0dXJuIHByb2R1dG8gPyBgJHtwcm9kdXRvLmNvZGlnb30gLSAke3Byb2R1dG8uZGVzY3JpY2FvfWAgOiAnJztcclxuICB9XHJcblxyXG4gIHNhbHZhck5vdGEoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pdGVucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5lcnJvID0gJ0luY2x1YSBhbyBtZW5vcyB1bSBwcm9kdXRvIG5hIG5vdGEgZmlzY2FsLic7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNhbHZhbmRvID0gdHJ1ZTtcclxuICAgIHRoaXMuZXJybyA9ICcnO1xyXG4gICAgdGhpcy5zdWNlc3NvID0gJyc7XHJcblxyXG4gICAgdGhpcy5ub3RhRmlzY2FsU2VydmljZS5jcmlhcih0aGlzLml0ZW5zKS5zdWJzY3JpYmUoe1xyXG4gICAgICBuZXh0OiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pdGVucyA9IFtdO1xyXG4gICAgICAgIHRoaXMucHJvZHV0b1NlbGVjaW9uYWRvSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucXVhbnRpZGFkZVNlbGVjaW9uYWRhID0gMTtcclxuICAgICAgICB0aGlzLnNhbHZhbmRvID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdWNlc3NvID0gJ05vdGEgZmlzY2FsIGNyaWFkYSBjb20gc3RhdHVzIEFiZXJ0YS4nO1xyXG4gICAgICAgIHRoaXMuY2FycmVnYXJQcm9kdXRvcygpO1xyXG4gICAgICAgIHRoaXMuY2FycmVnYXJOb3RhcygpO1xyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcjogKGU6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2FsdmFuZG8gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVycm8gPSBlPy5lcnJvcj8uZXJybyB8fCAnRXJybyBhbyBjcmlhciBub3RhIGZpc2NhbC4nO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbXByaW1pck5vdGEobm90YTogTm90YUZpc2NhbCk6IHZvaWQge1xyXG4gICAgaWYgKG5vdGEuc3RhdHVzICE9PSAnQWJlcnRhJykge1xyXG4gICAgICB0aGlzLmVycm8gPSAnU29tZW50ZSBub3RhcyBjb20gc3RhdHVzIEFiZXJ0YSBwb2RlbSBzZXIgaW1wcmVzc2FzLic7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByb2Nlc3NhbmRvSW1wcmVzc2FvSWQgPSBub3RhLmlkO1xyXG4gICAgdGhpcy5lcnJvID0gJyc7XHJcbiAgICB0aGlzLnN1Y2Vzc28gPSAnJztcclxuXHJcbiAgICB0aGlzLm5vdGFGaXNjYWxTZXJ2aWNlLmltcHJpbWlyKG5vdGEuaWQpLnN1YnNjcmliZSh7XHJcbiAgICAgIG5leHQ6IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3VjZXNzbyA9IHJlcz8ubWVuc2FnZW0gfHwgJ05vdGEgaW1wcmVzc2EgY29tIHN1Y2Vzc28uJztcclxuICAgICAgICB0aGlzLmNhcnJlZ2FyUHJvZHV0b3MoKTtcclxuICAgICAgICB0aGlzLmNhcnJlZ2FyTm90YXMoKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IChlOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLmVycm8gPSBlPy5lcnJvcj8uZXJybyB8fCAnRXJybyBhbyBpbXByaW1pciBhIG5vdGEgZmlzY2FsLic7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzYW5kb0ltcHJlc3Nhb0lkID0gbnVsbDtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdm9sdGFyUGFyYU5vdGFzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbm90YXMtZmlzY2FpcyddKTtcclxuICB9XHJcbn1cclxuIiwiPHNlY3Rpb24gY2xhc3M9XCJub3RhLWZpc2NhbC1wYWdlXCI+XHJcbiAgPGRpdiBjbGFzcz1cImhlYWRlci1yb3dcIj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxwIGNsYXNzPVwiZXllYnJvd1wiPk5vdGFzIGZpc2NhaXM8L3A+XHJcbiAgICAgIDxoMj5Ob3ZhIE5vdGEgRmlzY2FsPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInNlY29uZGFyeS1idG5cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInZvbHRhclBhcmFOb3RhcygpXCI+XHJcbiAgICAgIFZlciBub3Rhc1xyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncmlkXCI+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICA8c3Bhbj5Qcm9kdXRvIGNhZGFzdHJhZG88L3NwYW4+XHJcbiAgICAgICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cInByb2R1dG9TZWxlY2lvbmFkb0lkXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIFtuZ1ZhbHVlXT1cIm51bGxcIj5TZWxlY2lvbmUgdW0gcHJvZHV0bzwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgcCBvZiBwcm9kdXRvc1wiIFtuZ1ZhbHVlXT1cInAuaWRcIj5cclxuICAgICAgICAgICAge3sgcC5jb2RpZ28gfX0gLSB7eyBwLmRlc2NyaWNhbyB9fSAoc2FsZG86IHt7IHAuc2FsZG8gfX0pXHJcbiAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICA8c3Bhbj5RdWFudGlkYWRlPC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIFsobmdNb2RlbCldPVwicXVhbnRpZGFkZVNlbGVjaW9uYWRhXCIgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zLXJvd1wiPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeS1idG5cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImFkaWNpb25hckl0ZW0oKVwiPlxyXG4gICAgICAgICsgQWRpY2lvbmFyIHByb2R1dG9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNhcmRcIiAqbmdJZj1cIml0ZW5zLmxlbmd0aCA+IDAgfHwgZXJybyB8fCBzdWNlc3NvXCI+XHJcbiAgICA8aDM+UHJvZHV0b3MgZGEgbm90YTwvaDM+XHJcblxyXG4gICAgPHAgY2xhc3M9XCJlcnJvXCIgKm5nSWY9XCJlcnJvXCI+e3sgZXJybyB9fTwvcD5cclxuICAgIDxwIGNsYXNzPVwic3VjZXNzb1wiICpuZ0lmPVwic3VjZXNzb1wiPnt7IHN1Y2Vzc28gfX08L3A+XHJcblxyXG4gICAgPHRhYmxlIGNsYXNzPVwiaXRlbnMtdGFibGVcIiAqbmdJZj1cIml0ZW5zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDx0aD5Qcm9kdXRvPC90aD5cclxuICAgICAgICAgIDx0aD5RdWFudGlkYWRlPC90aD5cclxuICAgICAgICAgIDx0aD5Bw6fDtWVzPC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW5zOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICA8dGQ+e3sgbm9tZVByb2R1dG8oaXRlbS5wcm9kdXRvX2lkKSB9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3sgaXRlbS5xdWFudGlkYWRlIH19PC90ZD5cclxuICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRhbmdlci1idG5cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInJlbW92ZXJJdGVtKGkpXCI+UmVtb3ZlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic2F2ZS1yb3dcIiAqbmdJZj1cIml0ZW5zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnktYnRuXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJzYWx2YXJOb3RhKClcIiBbZGlzYWJsZWRdPVwic2FsdmFuZG9cIj5cclxuICAgICAgICB7eyBzYWx2YW5kbyA/ICdTYWx2YW5kby4uLicgOiAnU2FsdmFyIE5vdGEgKHN0YXR1czogQWJlcnRhKScgfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNhcmQgbm90YXMtbGlzdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdGl0bGUtcm93XCI+XHJcbiAgICAgIDxoMz5Ob3RhcyBjYWRhc3RyYWRhczwvaDM+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwibm90YXMubGVuZ3RoID09PSAwXCIgY2xhc3M9XCJlbXB0eS1zdGF0ZVwiPlxyXG4gICAgICBOZW5odW1hIG5vdGEgZmlzY2FsIGNhZGFzdHJhZGEgYWluZGEuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwibm90YXMubGVuZ3RoID4gMFwiIGNsYXNzPVwibm90YS1saXN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub3RhLWl0ZW1cIiAqbmdGb3I9XCJsZXQgbm90YSBvZiBub3Rhc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3RhLW1haW5cIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzdHJvbmc+Tm90YSBuwroge3sgbm90YS5udW1lcm8gfX08L3N0cm9uZz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0dXMgc3RhdHVzLXt7IG5vdGEuc3RhdHVzIHwgbG93ZXJjYXNlIH19XCI+e3sgbm90YS5zdGF0dXMgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGEtaXRlbnNcIiAqbmdJZj1cIm5vdGEuaXRlbnM/Lmxlbmd0aFwiPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygbm90YS5pdGVuc1wiPlxyXG4gICAgICAgICAgICAgIHt7IGl0ZW0uY29kaWdvIH19IC0ge3sgaXRlbS5kZXNjcmljYW8gfX0gwrcge3sgaXRlbS5xdWFudGlkYWRlIH19IHVuaWRhZGUocylcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3RhLWFjdGlvbnNcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJwcmltYXJ5LWJ0blwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiaW1wcmltaXJOb3RhKG5vdGEpXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cIm5vdGEuc3RhdHVzICE9PSAnQWJlcnRhJyB8fCBwcm9jZXNzYW5kb0ltcHJlc3Nhb0lkID09PSBub3RhLmlkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3sgcHJvY2Vzc2FuZG9JbXByZXNzYW9JZCA9PT0gbm90YS5pZCA/ICdQcm9jZXNzYW5kby4uLicgOiAnSW1wcmltaXInIH19XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG4iLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZHV0b3NDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3Byb2R1dG9zL3Byb2R1dG9zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5vdGFzRmlzY2Fpc0NvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbm90YXMtZmlzY2Fpcy9ub3Rhcy1maXNjYWlzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5vdGFGaXNjYWxOb3ZhQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9ub3RhLWZpc2NhbC1ub3ZhL25vdGEtZmlzY2FsLW5vdmEuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwcm9kdXRvcycsIGNvbXBvbmVudDogUHJvZHV0b3NDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdub3Rhcy1maXNjYWlzJywgY29tcG9uZW50OiBOb3Rhc0Zpc2NhaXNDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdub3Rhcy1maXNjYWlzL25vdmEnLCBjb21wb25lbnQ6IE5vdGFGaXNjYWxOb3ZhQ29tcG9uZW50IH0sXHJcbl07IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBzaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxyXG4gIGltcG9ydHM6IFtSb3V0ZXJPdXRsZXRdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2FwcC5jc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIHByb3RlY3RlZCByZWFkb25seSB0aXRsZSA9IHNpZ25hbCgnZnJvbnRlbmQnKTtcclxufVxyXG4iLCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU87QUFDUCxTQUFTLDRCQUE0Qjs7O0FDRHJDLFNBQTRCLGtDQUFrQztBQUM5RCxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHlCQUF5Qjs7O0FDRmxD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aUJBQWlCLEtBQUssQ0FBQztBQUFBLElBQ3BELGNBQWMsTUFBTTtBQUFBLElBQ3BCLGtCQUFrQjtBQUFBLEVBQ3BCO0FBQ0Y7OztBY1pBLFNBQVMsYUFBQUcsWUFBVyxjQUFjO0FBQ2xDLFNBQVMsb0JBQW9COztBQVF2QixJQUFPLE1BQVAsTUFBTyxLQUFHO0VBQ0ssUUFBUTtJQUFPOzs7Ozs7O3FDQUR2QixNQUFHO0VBQUE7NkVBQUgsTUFBRyxXQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsTUFBQSxHQUFBLFVBQUEsU0FBQSxhQUFBLElBQUEsS0FBQTtBQUFBLFFBQUEsS0FBQSxHQUFBO0FDVGhCLE1BQUEsd0JBQUEsR0FBQSxlQUFBOztvQkRLWSxZQUFZLEdBQUEsZUFBQSxFQUFBLENBQUE7OztnRkFJWCxLQUFHLENBQUE7VUFOZkE7dUJBQ1csWUFBVSxTQUNYLENBQUMsWUFBWSxHQUFDLFVBQUEsc0NBQUEsQ0FBQTs7OztpRkFJWixLQUFHLEVBQUEsV0FBQSxPQUFBLFVBQUEsa0JBQUEsWUFBQSxHQUFBLENBQUE7QUFBQSxHQUFBOzs7Ozs7OytEQUFILEtBQUcsRUFBQSxTQUFBLENBQUFDLEdBQUEsR0FBQSxDQUFBLGNBQUFELFVBQUEsR0FBQSxhQUFBLEVBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxjQUFBLFlBQUEsS0FBQSxJQUFBLENBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGVBQUEsWUFBQSxPQUFBLFlBQUEsSUFBQSxHQUFBLDRCQUFBLENBQUEsTUFBQSxFQUFBLE9BQUEsTUFBQSxZQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FmSmhCLHFCQUFxQixLQUFLLFNBQVMsRUFDaEMsTUFBTSxDQUFDLFFBQVEsUUFBUSxNQUFNLEdBQUcsQ0FBQzsiLCJuYW1lcyI6WyJpMCIsIkNvbXBvbmVudCIsImFmdGVyTmV4dFJlbmRlciIsIkNvbW1vbk1vZHVsZSIsImFmdGVyTmV4dFJlbmRlciIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTIiLCJDb21wb25lbnQiLCJhZnRlck5leHRSZW5kZXIiLCJDb21tb25Nb2R1bGUiLCJJbmplY3RhYmxlIiwiY2F0Y2hFcnJvciIsInRpbWVvdXQiLCJhZnRlck5leHRSZW5kZXIiLCJDb21tb25Nb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkzIiwiaTIiLCJDb21wb25lbnQiLCJhZnRlck5leHRSZW5kZXIiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsImFmdGVyTmV4dFJlbmRlciIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJpMyIsIkNvbXBvbmVudCIsImkwIl0sImRlYnVnSWQiOiIyM2VhYWQwZi1hMzE0LTU5YzAtOGQ5MS1kYjAwMDk4NDA3YjIifQ==