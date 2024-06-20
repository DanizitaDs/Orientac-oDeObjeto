class Pessoa{
    nome: string
    idade: number
    constructor(nome:string,idade:number){
        this.nome = nome
        this.idade = idade
    }
 comprimentar():void{

 }
}
class Danielle extends Pessoa{
    comprimentar(): void {
        console.log(`Ola ${this.nome}, como vc esta?`)
    }
} 

let eu:Danielle = new Danielle(`Danielle`,19)

eu.comprimentar()

class Crianca extends Pessoa {
comprimentar(): void {
     console.log(`Ola ${this.nome}, voce se chama ${this.nome} e tem ${this.idade} anos! Es: Crianca`)
}
}
class Adulto extends Pessoa {
    comprimentar(): void {
         console.log(`Ola ${this.nome}, voce se chama ${this.nome} e tem ${this.idade} anos! Es: Adulto`)
    }
}
class Idoso extends Pessoa {
    comprimentar(): void {
         console.log(`Ola ${this.nome}, voce se chama ${this.nome} e tem ${this.idade} anos! Es: Idoso`)
    }
}

let kid = new Crianca(`Dani`,7)
let veio = new Adulto("Karol",34)
let veioso = new Idoso('paulo',78)
kid.comprimentar()
veio.comprimentar()
veioso.comprimentar()