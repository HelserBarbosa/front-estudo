import { Component, OnInit } from '@angular/core';
import { Pessoa, PessoaConsulta } from '../pessoas.model';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'ini-consultar-todos',
  templateUrl: './consultar-todos.component.html',
  styleUrls: ['./consultar-todos.component.css']
})
export class ConsultarTodosComponent implements OnInit {

  pessoas : PessoaConsulta[]

  constructor(private pessoasService : PessoasService) { }

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
}
