import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ini-cadastrar-pessoa',
  templateUrl: './cadastrar-pessoa.component.html',
  styleUrls: ['./cadastrar-pessoa.component.css']
})
export class CadastrarPessoaComponent implements OnInit {

  cadastrarForm: FormGroup

  constructor(private pessoaService: PessoasService, private route: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.iniciarFormulario()
  }

  iniciarFormulario() {
    this.cadastrarForm = this.fb.group({
      pessoaNome : ['',Validators.required],
      pessoaIdade : ['', Validators.required]
    })
  }

  cadastrarPessoa() {
      this.pessoaService.postPessoa({ nome: this.cadastrarForm.get("pessoaNome").value, idade: this.cadastrarForm.get("pessoaIdade").value }).subscribe(() => this.route.navigate([' ']))
    
  }
}
