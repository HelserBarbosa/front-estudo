import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pessoa, PessoaConsulta } from './pessoas.model';
import { JSON_SERVER } from 'rotas';
import { PessoaById } from './consultar-todos/pessoas-details/pessoa-details.model';


@Injectable()
export class PessoasService{

    constructor(private http : HttpClient){

    }

    getPessoas() : Observable<PessoaConsulta[]>{
        
        let params = new HttpParams();

        params.append('nome', "Helder")

        return this.http.get<PessoaConsulta[]>(`${JSON_SERVER}/pessoas`, {params : params})
    }

    postPessoa(pessoa : Pessoa ) : Observable<Pessoa>{

        return this.http.post<Pessoa>(`${JSON_SERVER}/pessoas`, pessoa);
    }

    deletePessoa(id : number) : Observable<Pessoa> {
        return this.http.delete<Pessoa>(`${JSON_SERVER}/pessoas/${id}`)
    }

    pessoaById(id : string) : Observable<PessoaById>{
        return this.http.get<PessoaById>(`${JSON_SERVER}/pessoas/${id}`)
    }

    editarPessoa(id: string, pessoa : Pessoa) : Observable<Pessoa>{
        return this.http.put<Pessoa>(`${JSON_SERVER}/pessoas/${id}`,pessoa)
    }

}