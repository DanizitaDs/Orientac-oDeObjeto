export class Coruja {
    nome: string
    peso: number

    constructor (nome:string,peso:number){
        this.nome = nome
        this.peso = peso
      }

    chirriar(): void{  // void é utilizado para a função que não necessita de um return
        console.log(`UUuuuuUUUuu!`)
  } 

  comer (quantidade:number): void {
        console.log(`A coruja ${quantidade} ratos.`)
  }


  voar(tempo:number): void {
    console.log(`A coruja voa ${tempo} por dia!`)
  }

}
 