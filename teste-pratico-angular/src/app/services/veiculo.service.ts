import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Veiculo } from '../shared/models/veiculo';


@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  endpointVeiculo: string = environment.endpointVeiculo
  endpointRelatorio : string = environment.endpointVeiculoioRelatorio

  httpOptions = ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  })

  constructor(public httpClient: HttpClient) { }

  getVeiculos(): Observable<any> {
    return this.httpClient.get(this.endpointVeiculo, this.httpOptions)
  }

  createVeiculo(funcionario: Veiculo): Observable<any> {
    const body = JSON.stringify(funcionario)
    return this.httpClient.post(this.endpointVeiculo, body,this.httpOptions)
  }

  gerarRelatorio(dataInicial: string, dataFinal: string): Observable <any> {
    return this.httpClient.get(`${this.endpointRelatorio}/${dataInicial}/${dataFinal}`, this.httpOptions)
  }
}
