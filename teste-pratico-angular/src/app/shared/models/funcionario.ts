export interface IFuncionario {
  nome: string
  cpf: string
  dataNascimento: string
  login: string
  senha: string
}

export class Funcionario implements IFuncionario {
  nome: string
  cpf: string
  dataNascimento: string
  login: string
  senha: string

  constructor(funcionario : IFuncionario) {
    this.nome = funcionario?.nome ? funcionario.nome : ''
    this.cpf = funcionario?.cpf ? funcionario.cpf : ''
    this.dataNascimento = funcionario?.dataNascimento ? funcionario.dataNascimento : ''
    this.login = funcionario?.login ? funcionario.login : ''
    this.senha = funcionario?.senha ? funcionario.senha : ''
  }
}
