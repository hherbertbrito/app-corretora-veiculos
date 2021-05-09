import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfPipe'
})
export class CpfPipe implements PipeTransform {

  transform(cpf: string ): string {
    if (!cpf) {
      return '';
    }

    var cpfValor = cpf.replace(/[A-Za-z]/gi, '');

    if (cpfValor.length !== 11) {
      return cpfValor;
    }

    var cpfLista = cpfValor.match(/^(\d{3})(\d{3})(\d{3})(\d{2})$/);

    if (cpfLista && cpfLista.length === 5) {
      cpf = cpfLista[1] + '.' + cpfLista[2] + '.' + cpfLista[3] + '-' + cpfLista[4];
    }

    return cpf;
  }
}
