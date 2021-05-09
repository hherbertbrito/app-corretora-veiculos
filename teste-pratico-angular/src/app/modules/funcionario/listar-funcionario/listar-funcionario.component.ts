import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FuncionarioService } from 'src/app/services/funcionario.service';

import { Funcionario } from 'src/app/shared/models/funcionario';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.scss']
})
export class ListarFuncionarioComponent implements OnInit {

  @ViewChild('inputFilterNome', {static: false})
  inputFilterNome: ElementRef

  checkedNome = false
  checkedCpf  = false

  funcionarios: Funcionario[]

  textInputFilterNome: string
  textInputFilterCpf: string

  constructor(private service: FuncionarioService) { }

  ngOnInit(): void {
    this.service.getFuncionarios().subscribe(data => {
      this.funcionarios = data
    })
  }
}
