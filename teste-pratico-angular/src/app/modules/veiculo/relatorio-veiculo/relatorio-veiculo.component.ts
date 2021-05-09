import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Veiculo } from 'src/app/shared/models/veiculo';

const DATA_TABLE: Veiculo[] = [
  {placa: "99-999", ativo:true, anoModelo:"2015", anoFabricacao:"2015", chassi: "1d2a3sd4586", consumoMedioKM: 10, cor: "Branco", dataCadastro: "12/12/12",dataDesativacao: "12/12/12", modelo: "Sportivo", qtdPassageiros: 6},
  {placa: "88-888", ativo:true, anoModelo:"2015", anoFabricacao:"2015", chassi: "1d2a3sd4586", consumoMedioKM: 10, cor: "Branco", dataCadastro: "12/12/12",dataDesativacao: "12/12/12", modelo: "Teste", qtdPassageiros: 6}
]

@Component({
  selector: 'app-relatorio-veiculo',
  templateUrl: './relatorio-veiculo.component.html',
  styleUrls: ['./relatorio-veiculo.component.scss']
})
export class RelatorioVeiculoComponent implements OnInit {

  form: FormGroup

  dateInitial: string
  dateFinal: string

  veiculos: Veiculo[]

  constructor(private formBuilder: FormBuilder, private service: VeiculoService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      dateInitial: [null, [Validators.required]],
      dateFinal: [null, [Validators.required]]
    })
  }

  hasError(field: string) {
    return this.form.get(field).errors
  }

  gerarRelatorio() {
    if(this.form.valid){
      if(this.form.value.dateInitial <= this.form.value.dateFinal){
        this.service.gerarRelatorio(this.dateInitial, this.dateFinal).subscribe(data => (this.veiculos = data))
      } else {
        this.form.controls['dateFinal'].setErrors({incorrect: true})
      }
    }
  }

}
