import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableFuncionariosComponent } from './data-table-funcionarios.component';

describe('DataTableFuncionariosComponent', () => {
  let component: DataTableFuncionariosComponent;
  let fixture: ComponentFixture<DataTableFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableFuncionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
