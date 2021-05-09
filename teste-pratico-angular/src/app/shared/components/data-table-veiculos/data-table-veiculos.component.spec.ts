import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableVeiculosComponent } from './data-table-veiculos.component';

describe('DataTableVeiculosComponent', () => {
  let component: DataTableVeiculosComponent;
  let fixture: ComponentFixture<DataTableVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableVeiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
