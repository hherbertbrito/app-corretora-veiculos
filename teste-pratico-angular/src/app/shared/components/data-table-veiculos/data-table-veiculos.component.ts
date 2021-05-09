import { Component, Input, OnInit } from '@angular/core';

import { Veiculo } from '../../models/veiculo';

@Component({
  selector: 'data-table-veiculos',
  templateUrl: './data-table-veiculos.component.html',
  styleUrls: ['./data-table-veiculos.component.scss']
})
export class DataTableVeiculosComponent implements OnInit {
  @Input()
  displayedColumns: string[]

  @Input()
  dataTable: Veiculo[]

  @Input()
  searchPlacaInTable: string

  @Input()
  searchModeloInTable: string

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = ['placa','ativo','anoFabricacao','anoModelo',
    'chassi','dataCadastro','modelo','cor','consumoMedioKM','qtdPassageiros']
  }

  getDataTable() {
    const modelo = this.searchModeloInTable ? this.searchModeloInTable.toLowerCase() : null
    const placa  = this.searchPlacaInTable  ? this.searchPlacaInTable.toLowerCase() : null

    if(modelo && placa) {
      return this.dataTable.filter((e,i) => (e.placa.toLowerCase().indexOf(placa) > -1
        && e.modelo.toLowerCase().indexOf(modelo) > -1))
    }

    if(modelo || placa) {
      return this.dataTable.filter((e,i) => (e.placa.toLowerCase().indexOf(placa) > -1
        || e.modelo.toLowerCase().indexOf(modelo) > -1))
    }

    return this.dataTable
  }

}
