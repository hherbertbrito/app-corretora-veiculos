
export interface IVeiculo {
  placa: string
  ativo: boolean
  anoFabricacao: string
  anoModelo: string
  chassi: string
  dataCadastro: string
  dataDesativacao: string
  modelo: string
  cor: string
  consumoMedioKM: number
  qtdPassageiros: number
}

export class Veiculo implements IVeiculo{
  placa: string
  ativo: boolean
  anoFabricacao: string
  anoModelo: string
  chassi: string
  dataCadastro: string
  dataDesativacao: string
  modelo: string
  cor: string
  consumoMedioKM: number
  qtdPassageiros: number

  constructor (veiculo: IVeiculo) {
    this.placa = veiculo?.placa ? veiculo.placa: ''
    this.ativo = veiculo?.ativo ? veiculo.ativo: true
    this.anoFabricacao = veiculo?.anoFabricacao ? veiculo.anoFabricacao: ''
    this.anoModelo = veiculo?.anoModelo ? veiculo.anoModelo: ''
    this.chassi = veiculo?.chassi ? veiculo.chassi: ''
    this.dataCadastro = veiculo?.dataCadastro ? veiculo.dataCadastro: ''
    this.dataDesativacao = veiculo?.dataDesativacao ? veiculo.dataDesativacao: ''
    this.modelo = veiculo?.modelo ? veiculo.modelo: ''
    this.cor = veiculo?.cor ? veiculo.cor: ''
    this.consumoMedioKM = veiculo?.consumoMedioKM ? veiculo.consumoMedioKM: 0
    this.qtdPassageiros = veiculo?.qtdPassageiros ? veiculo.qtdPassageiros: 4
  }
}
