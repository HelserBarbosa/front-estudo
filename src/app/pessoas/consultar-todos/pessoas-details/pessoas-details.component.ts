import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../../pessoas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaById } from './pessoa-details.model';
import { Pessoa } from 'src/app/pessoas/pessoas.model';


@Component({
  selector: 'ini-pessoas-details',
  templateUrl: './pessoas-details.component.html',
  styleUrls: ['./pessoas-details.component.css']
})
export class PessoasDetailsComponent implements OnInit {

  pessoa?: PessoaById

  constructor(private pessoaSerivice: PessoasService,
    private activedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.pessoaSerivice.pessoaById(this.getPathId()).subscribe(pessoa => this.pessoa = pessoa);
  }
  getPathId(): any {
    return this.activedRouter.snapshot.params['id']
  }
}
