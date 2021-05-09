import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Veiculo } from 'src/app/shared/models/veiculo';

const DATA_TABLE: Veiculo[] = [
  {placa: "99-999", ativo:true, anoModelo:"2015", anoFabricacao:"2015", chassi: "1d2a3sd4586", consumoMedioKM: 10, cor: "Branco", dataCadastro: "12/12/12",dataDesativacao: "12/12/12", modelo: "Sportivo", qtdPassageiros: 6},
  {placa: "88-888", ativo:true, anoModelo:"2015", anoFabricacao:"2015", chassi: "1d2a3sd4586", consumoMedioKM: 10, cor: "Branco", dataCadastro: "12/12/12",dataDesativacao: "12/12/12", modelo: "Teste", qtdPassageiros: 6}
]

@Component({
  selector: 'app-consultar-veiculo',
  templateUrl: './consultar-veiculo.component.html',
  styleUrls: ['./consultar-veiculo.component.scss']
})
export class ConsultarVeiculoComponent implements OnInit {

  checkedPlaca: false
  checkedModelo: false
  textInputFilterPlaca: string
  textInputFilterModelo: string

  veiculos: Veiculo[]

  constructor(private service: VeiculoService) { }

  ngOnInit(): void {
    this.service.getVeiculos().subscribe(data => (this.veiculos = data))
  }

}
