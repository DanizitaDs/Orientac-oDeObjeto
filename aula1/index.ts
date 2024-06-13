class Carro {
    rodas: number
    motor: number
    pintura: string
    modelo: string
    marca: string
    km: number

    constructor (rodas: number,motor: number,pintura: string,modelo: string, marca: string,km:number){
        this.rodas = rodas
        this.motor = motor
        this.pintura = pintura
        this.marca = marca
        this.km = km
}
    acelerar(){
            console.log(`a ${this.marca} chegou a ${this.km} k/m`)
}
    submegir(){
        console.log(`estou dirigindo uma ${this.marca} que tem a cor ${this.pintura} e consegue chegar a ${this.km} k/h!!`)
}
    voar (){
        console.log('Hora de voarr fruuuummm')
}
}

// npx tsc index.ts
// node index.js


// Tem que repetir novamente depois de copiar alguma coisa

// atividade 2:


class CarroDelas {
    rodas: number
    motor: number
    pintura: string
    modelo: string
    marca: string
    km: number

    constructor (rodas: number,motor: number,pintura: string, marca: string,km:number){
        this.rodas = rodas
        this.motor = motor
        this.pintura = pintura
        this.marca = marca
        this.km = km
}
}

var readLine = require('readline-sync')

var rodas: number = readLine.question('Digite a quantidade de rodas:')
var motor: number = readLine.question('Digite a numeração do motor:')
var cor = readLine.question('Digite a cor do carro:')
var marca = readLine.question('Digite a marca do carro:')
var km: number = readLine.question('Digite quantos Km o carro vai percorrer:')

const mewCarro = new CarroDelas(rodas,motor,cor,marca,km);

