import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastrarVeiculoComponent } from './cadastrar-veiculo/cadastrar-veiculo.component';
import { ConsultarVeiculoComponent } from './consultar-veiculo/consultar-veiculo.component';
import { RelatorioVeiculoComponent } from './relatorio-veiculo/relatorio-veiculo.component';
import { SharedModule } from 'src/app/shared/components/shared.module';
import { VeiculoRoutingModule } from './veiculo-routing.module';



@NgModule({
  declarations: [CadastrarVeiculoComponent, ConsultarVeiculoComponent, RelatorioVeiculoComponent],
  imports: [
    VeiculoRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VeiculoModule { }
