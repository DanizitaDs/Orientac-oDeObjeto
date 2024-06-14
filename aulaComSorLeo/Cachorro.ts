export class Cachorro {
    nome: string
    peso: number
    raça: string

    constructor (nome:string,peso:number,raça:string){
        this.nome = nome
        this.peso = peso
        this.raça = raça
      }

    Latir(): void{  // void é utilizado para a função que não necessita de um return
        console.log(`Au Auu!`)
  } 

  Comer (quantidade:number): void {
        console.log(`O cachorro ${quantidade} coxinhas.`)
  }

}

const novaCachorro:Cachorro = new Cachorro('Xuxu',20,'chiuaua')

