import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FunctionarioRoutingModule } from './functionario-routing.module';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { RelatorioFuncionarioComponent } from './relatorio-funcionario/relatorio-funcionario.component';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  declarations: [
    CadastroFuncionarioComponent,
    ListarFuncionarioComponent,
    RelatorioFuncionarioComponent
  ],
  imports: [
    FunctionarioRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FuncionarioModule {
  constructor(route: Router) {}
 }
