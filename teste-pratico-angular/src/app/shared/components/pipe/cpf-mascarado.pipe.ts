import { Pipe, PipeTransform } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Pipe({
  name: 'cpfMascarado'
})
export class CpfMascaradoPipe implements PipeTransform {

  transform(cpf: string): string {
    var cpfValor = cpf.replace(/\D/g, '');

    if (cpfValor.length !== 11 && cpfValor.length !== 14 && cpfValor.length !== 13) {
      return cpf;
    }

    let cpfLista;

    if (cpfValor.length == 11) {
      cpfLista = cpfValor.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);
      return '***.' + cpfLista[2] + '.' + cpfLista[3] + '-**';
    } else if (cpfValor.length == 14) {
      cpfLista = cpfValor.match(/^(\d{3})(\d{3})(\d{3})(\d{4})(\d{2})$/);
      return '***.' + cpfLista[2] + '.' + cpfLista[3] + "/" + cpfLista[4] + '-**';
    } else {
      cpfLista = cpfValor.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);
      return '**.' + cpfLista[2] + '.' + cpfLista[3] + "/" + cpfLista[4] + '-**';
    }
  }

}
