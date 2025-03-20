import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent }, // Página inicial
  // { path: 'home', component: HomeComponent }, // Opcional: acessível por "/home"
  { path: '**', redirectTo: '' } // Redireciona qualquer rota desconhecida para a home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
