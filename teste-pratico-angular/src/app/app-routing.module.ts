import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'funcionario',
    loadChildren: () => import('./modules/funcionario/funcionario.module').then(m => m.FuncionarioModule)
  }, {
    path: 'veiculo',
    loadChildren: () => import('./modules/veiculo/veiculo.module').then(m => m.VeiculoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
