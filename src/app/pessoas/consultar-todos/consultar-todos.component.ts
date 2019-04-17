import { Component, OnInit } from '@angular/core';
import { PessoaConsulta } from '../pessoas.model';
import { PessoasService } from '../pessoas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ini-consultar-todos',
  templateUrl: './consultar-todos.component.html',
  styleUrls: ['./consultar-todos.component.css']
})
export class ConsultarTodosComponent implements OnInit {

  pessoas : PessoaConsulta[]

  

  constructor(private pessoasService : PessoasService,
              private router : Router) { }

  ngOnInit() {
   this.consultarPessoas()
  }

  deletePessoa(id : number){
    this.pessoasService.deletePessoa(id).subscribe(() =>  {
      this.consultarPessoas()
    })
  }

  consultarPessoas(){
    this.pessoasService.getPessoas().subscribe(pessoas => this.pessoas = pessoas)
  }

  goToVisualizar(id : number){
    this.router.navigate([`pessoas/visualizar/${id}`])
  }
}
