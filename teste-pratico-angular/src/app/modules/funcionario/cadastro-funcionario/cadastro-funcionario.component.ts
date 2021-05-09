import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';

import { Funcionario } from 'src/app/shared/models/funcionario';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.scss']
})
export class CadastroFuncionarioComponent implements OnInit {

  functionario: Funcionario

  form: FormGroup

  constructor(private formBuilder: FormBuilder,
              private service: FuncionarioService,
              private router: Router) { }

  ngOnInit(): void {
    this.functionario = new Funcionario(null)

    this.form = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.maxLength(40)]],
      cpf: [null, [Validators.required, Validators.maxLength(14)]],
      dataNascimento: ['', [Validators.required]],
      login: [null, [Validators.required,Validators.minLength(6), Validators.maxLength(12)]],
      senha: [null, [Validators.required,Validators.minLength(6), Validators.maxLength(12)]],
    })
  }

  gravar() {
    if(this.form.valid)
    this.functionario.dataNascimento = this.functionario.dataNascimento.replace('-','/').replace('-','/');
      this.service.createFuncionario(this.functionario).subscribe(data => {
        this.router.navigateByUrl('/funcionario/consultar')
      })
  }

}
