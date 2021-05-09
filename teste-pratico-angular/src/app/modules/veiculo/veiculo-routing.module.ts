import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarVeiculoComponent } from './cadastrar-veiculo/cadastrar-veiculo.component';
import { ConsultarVeiculoComponent } from './consultar-veiculo/consultar-veiculo.component';
import { RelatorioVeiculoComponent } from './relatorio-veiculo/relatorio-veiculo.component';


const routes: Routes = [
  {
    path: 'consultar',
    component: ConsultarVeiculoComponent
  },
  {
    path: 'cadastrar',
    component: CadastrarVeiculoComponent
  },
  {
    path: 'relatorio',
    component: RelatorioVeiculoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculoRoutingModule {}
