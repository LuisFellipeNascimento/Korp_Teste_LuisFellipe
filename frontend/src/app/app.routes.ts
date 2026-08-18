import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { NotasFiscaisComponent } from './pages/notas-fiscais/notas-fiscais.component';
import { NotaFiscalNovaComponent } from './pages/nota-fiscal-nova/nota-fiscal-nova.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'notas-fiscais', component: NotasFiscaisComponent },
  { path: 'notas-fiscais/nova', component: NotaFiscalNovaComponent },
];