class Data {
dia: number
mes: number
ano: number

constructor (dia:number,mes:number,ano:number){
this.dia = dia
this.mes = mes
this.ano = ano
}
}

let dataNova: Data = new Data(14,23,34)

console.log(dataNova)