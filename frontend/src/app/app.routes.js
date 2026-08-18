import { ProdutosComponent } from './pages/produtos/produtos';
import { NotasFiscaisComponent } from './pages/notas-fiscais/notas-fiscais';
import { NotaFiscalNovaComponent } from './pages/nota-fiscal-nova/nota-fiscal-nova';
export const routes = [
    { path: '', redirectTo: 'produtos', pathMatch: 'full' },
    { path: 'produtos', component: ProdutosComponent },
    { path: 'notas-fiscais', component: NotasFiscaisComponent },
    { path: 'notas-fiscais/nova', component: NotaFiscalNovaComponent },
];
