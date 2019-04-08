import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ini-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent implements OnInit {

  pessoaNome : string;
  pessoaIdade : number;

  constructor(private pessoaService : PessoasService, private route : Router) { }

  ngOnInit() {
  }

  cadastrarPessoa(){
    if(this.pessoaNome){
      this.pessoaService.postPessoa({nome : this.pessoaNome, idade : this.pessoaIdade}).subscribe(() => this.route.navigate(['/pessoas']))
    }
  }

  validarNome() : boolean{
    return !this.pessoaNome 
  }
}
