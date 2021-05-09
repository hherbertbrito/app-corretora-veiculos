import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../shared/models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  endpointFuncionario: string = environment.endpointFuncionario
  endpointRelatorio : string = environment.endpointFuncionarioRelatorio

  httpOptions = ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  })

  constructor(public httpClient: HttpClient) { }

  getFuncionarios(): Observable<any> {
    return this.httpClient.get(this.endpointFuncionario, this.httpOptions)
  }

  createFuncionario(funcionario: Funcionario): Observable<any> {
    const body = JSON.stringify(funcionario)
    return this.httpClient.post(this.endpointFuncionario, body,this.httpOptions)
  }

  gerarRelatorio(dataInicial: string, dataFinal: string): Observable<any> {
    return this.httpClient.get(`${this.endpointRelatorio}/${dataInicial}/${dataFinal}`, this.httpOptions)
  }
}
