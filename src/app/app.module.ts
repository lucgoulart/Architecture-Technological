import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header/header.component';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial/pagina-inicial.component';
import { QuemSomosComponent } from './components/quem-somos/quem-somos/quem-somos.component';
import { NoticiasComponent } from './components/noticias/noticias/noticias.component';
import { ProdutosComponent } from './components/produtos/produtos/produtos.component';
import { ParceirosComponent } from './components/parceiros/parceiros/parceiros.component';
import { ContatoComponent } from './components/contato/contato/contato.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PaginaInicialComponent,
    QuemSomosComponent,
    NoticiasComponent,
    ProdutosComponent,
    ParceirosComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
