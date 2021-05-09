import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Veiculo } from 'src/app/shared/models/veiculo';

@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: './cadastrar-veiculo.component.html',
  styleUrls: ['./cadastrar-veiculo.component.scss']
})
export class CadastrarVeiculoComponent implements OnInit {

  veiculo: Veiculo
  form: FormGroup

  constructor(private forBuilder: FormBuilder,
              private service: VeiculoService,
              private router: Router) { }

  ngOnInit(): void {
    this.veiculo = new Veiculo(null)
    this.veiculo.dataCadastro = new Date().toLocaleDateString()
    this.form = this.forBuilder.group({
        placa: [null, [Validators.required]],
        ativo: [true, [Validators.required]],
        anoFabricacao: [null, [Validators.required, Validators.pattern('[0-9]*')]],
        anoModelo: [null, [Validators.required, Validators.pattern('[0-9]*')]],
        chassi: [null, [Validators.required]],
        dataCadastro: [null, []],
        dataDesativacao: [null, []],
        modelo: [null, [Validators.required]],
        cor: [null],
        consumoMedioKM: [null, [Validators.required]],
        qtdPassageiros: [4, [Validators.required]],
    })

  }

  gravar() {
    if(this.form.valid){
      this.service.createVeiculo(this.veiculo).subscribe(data => {
        this.router.navigateByUrl("/veiculo/consultar")
      })
    }
  }

  setDataDesativacao(){
    if(!this.veiculo.ativo){
      this.veiculo.dataDesativacao = new Date().toLocaleDateString()
    } else {
      this.veiculo.dataDesativacao = null
    }
  }

}
