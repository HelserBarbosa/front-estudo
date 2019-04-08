import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { ConsultarTodosComponent } from './pessoas/consultar-todos/consultar-todos.component';
import { CadastrarPessoaComponent } from './pessoas/cadastrar-pessoa/cadastrar-pessoa.component';
import { PessoasDetailsComponent } from './pessoas/consultar-todos/pessoas-details/pessoas-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'pessoas', component: PessoasComponent,
    children: [
      { path: 'todos', component: ConsultarTodosComponent },
      { path: 'novo', component: CadastrarPessoaComponent },
      { path: 'visualizar/:id', component: PessoasDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
