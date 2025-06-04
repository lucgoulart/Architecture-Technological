import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial/pagina-inicial.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos/quem-somos.component';
import { NoticiasComponent } from './components/noticias/noticias/noticias.component';
import { ProdutosComponent } from './components/produtos/produtos/produtos.component';
import { ParceirosComponent } from './components/parceiros/parceiros/parceiros.component';
import { ContatoComponent } from './components/contato/contato/contato.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'noticias', component: NoticiasComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'parceiros', component: ParceirosComponent},
  { path: 'contato', component: ContatoComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
