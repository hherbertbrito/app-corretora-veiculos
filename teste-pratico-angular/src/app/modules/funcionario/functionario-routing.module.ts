import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { RelatorioFuncionarioComponent } from './relatorio-funcionario/relatorio-funcionario.component';


const routes: Routes = [
  {
    path: 'consultar',
    component: ListarFuncionarioComponent
  },
  {
    path: 'cadastrar',
    component: CadastroFuncionarioComponent
  },
  {
    path: 'relatorio',
    component: RelatorioFuncionarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionarioRoutingModule {}
