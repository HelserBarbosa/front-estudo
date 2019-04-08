import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { HttpClientModule } from '@angular/common/http';
import { PessoasService } from './pessoas/pessoas.service';
import { FormsModule } from '@angular/forms';
import { ConsultarTodosComponent } from './pessoas/consultar-todos/consultar-todos.component';
import { CadastrarPessoaComponent } from './pessoas/cadastrar-pessoa/cadastrar-pessoa.component';
import { PessoasDetailsComponent } from './pessoas/consultar-todos/pessoas-details/pessoas-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PessoasComponent,
    ConsultarTodosComponent,
    CadastrarPessoaComponent,
    PessoasDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    BsDropdownModule,
     TooltipModule, 
     ModalModule
    ],
  providers: [BsDropdownModule,,TooltipModule,ModalModule, PessoasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
