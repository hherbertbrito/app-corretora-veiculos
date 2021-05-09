import { Component, Input, OnInit } from '@angular/core';
import { Funcionario } from '../../models/funcionario';

const DATA_TABLE: Funcionario[] = [
  {nome: 'João', cpf: '000.000.000-00', dataNascimento:'00/00/00', login: 'joao@teste.com', senha: 'joao@123'},
  {nome: 'Jose', cpf: '111.111.111-11', dataNascimento:'11/11/11', login: 'jose@teste.com', senha: 'jose@123'}
]

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {

  @Input()
  displayedColumns: string[]

  @Input()
  dataTable:Funcionario[]

  constructor () {
    this.displayedColumns = ['nome', 'cpf', 'dataNascimento',  'login']
    this.dataTable = DATA_TABLE
  }
}
