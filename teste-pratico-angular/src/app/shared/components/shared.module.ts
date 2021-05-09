import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table'
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'

import { MenuAccordionComponent } from './menu-accordion/menu-accordion.component'
import { DataTableComponent } from './data-table/data-table.component'
import { DataTableFuncionariosComponent } from './data-table-funcionarios/data-table-funcionarios.component'
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatCardModule} from '@angular/material/card'
import { CpfPipe } from './pipe/cpf.pipe'
import { CpfMascaradoPipe } from './pipe/cpf-mascarado.pipe'
import { DataTableVeiculosComponent } from './data-table-veiculos/data-table-veiculos.component'

@NgModule({
  declarations: [
    MenuAccordionComponent,
    DataTableComponent,
    DataTableFuncionariosComponent,
    DataTableVeiculosComponent,
    CpfPipe,
    CpfMascaradoPipe
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MenuAccordionComponent,
    DataTableComponent,
    DataTableFuncionariosComponent,
    DataTableVeiculosComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCardModule,
    CpfPipe,
    CpfMascaradoPipe,
    MatButtonModule
  ]
})
export class SharedModule {
  constructor(route: Router) { }
}
