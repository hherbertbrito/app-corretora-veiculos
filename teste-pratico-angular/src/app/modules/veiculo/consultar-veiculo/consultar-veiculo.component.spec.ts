import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarVeiculoComponent } from './consultar-veiculo.component';

describe('ConsultarVeiculoComponent', () => {
  let component: ConsultarVeiculoComponent;
  let fixture: ComponentFixture<ConsultarVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarVeiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
