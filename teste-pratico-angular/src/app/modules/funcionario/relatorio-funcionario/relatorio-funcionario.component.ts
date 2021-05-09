import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from 'src/app/shared/models/funcionario';

@Component({
  selector: 'app-relatorio-funcionario',
  templateUrl: './relatorio-funcionario.component.html',
  styleUrls: ['./relatorio-funcionario.component.scss']
})
export class RelatorioFuncionarioComponent implements OnInit {

  dateInitial: string
  dateFinal: string
  funcionarios: Funcionario[]
  form: FormGroup

  constructor(private formBuilder: FormBuilder, private service: FuncionarioService) { }

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
        this.service.gerarRelatorio(this.dateInitial, this.dateFinal).subscribe( data => {
          this.funcionarios = data
        })
      } else {
        this.form.controls['dateFinal'].setErrors({incorrect: true})
      }
    }
  }

}
