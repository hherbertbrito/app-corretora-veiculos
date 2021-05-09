import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioVeiculoComponent } from './relatorio-veiculo.component';

describe('RelatorioVeiculoComponent', () => {
  let component: RelatorioVeiculoComponent;
  let fixture: ComponentFixture<RelatorioVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
