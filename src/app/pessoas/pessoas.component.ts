import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoas.model';
import { PessoasService } from './pessoas.service';

@Component({
  selector: 'ini-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas : Pessoa[];

  nome : string
  idade : number

  constructor(private pessoasService : PessoasService) { }

  ngOnInit() {
    this.pessoasService.getPessoas().subscribe(pessoas => this.pessoas = pessoas);
  }

  postPessoa(){

    let pessoa = {nome : this.nome, idade : this.idade}

    this.pessoasService.postPessoa(pessoa).subscribe()
  }

}
