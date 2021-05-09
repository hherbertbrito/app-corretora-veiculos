import { Component, Input, OnInit } from '@angular/core';

import { Funcionario } from '../../models/funcionario';

@Component({
  selector: 'data-table-funcionarios',
  templateUrl: './data-table-funcionarios.component.html',
  styleUrls: ['./data-table-funcionarios.component.scss']
})
export class DataTableFuncionariosComponent implements OnInit {
  @Input()
  displayedColumns: string[]

  @Input()
  dataTable: Funcionario[]

  @Input()
  searchNomeInTable: string

  @Input()
  searchCpfInTable: string

  dataSourceTable: Funcionario[]

  constructor() { }

  ngOnInit(): void {
    this.displayedColumns = ['nome', 'cpf', 'dataNascimento',  'login']
  }

  getDataTable() {
    if(this.searchNomeInTable || this.searchCpfInTable) {
      const nome = this.searchNomeInTable ? this.searchNomeInTable.toLowerCase() : null
      const cpf  = this.searchCpfInTable  ? this.searchCpfInTable.toLowerCase()  : null
      return this.dataTable.filter((e,i)=>{
        if(nome && cpf) {
          return e.nome.toLowerCase().indexOf(nome) > -1 && e.cpf.toLowerCase().indexOf(cpf) > -1
        }
        return e.nome.toLowerCase().indexOf(nome) > -1 || e.cpf.toLowerCase().indexOf(cpf) > -1
      })
    }
    return this.dataTable
  }

}
