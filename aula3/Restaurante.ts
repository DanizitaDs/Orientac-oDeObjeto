var leitor = require('readline-sync')

class Cozinheiro{
    nome: string
    idade: number
    ano_xp: number
    
    constructor (nome:string,idade:number,ano_xp:number){
        this.nome = nome
        this.idade = idade
        this.ano_xp = ano_xp 
    }

    getCozinheiro(): void{
        console.log(`Ola meu nome é ${this.nome}, tenho ${this.idade} anos e sou chefe há ${this.ano_xp} anos.`)
    }

    setCozinheiro(): void {
        let nomeUp = leitor.question('Qual o nome do cozinehiro? ')
        let idadeUp = leitor.question('Qual a idade do cozinehiro? ')
        let ano_xpUp = leitor.question('Qual o tempo de xp do cozinheiro? ')
        this.nome = nomeUp
        this.idade = idadeUp
        this.ano_xp = ano_xpUp
    }
}

class Restaurante {
    cz: Cozinheiro
    nome: string
    endereco: string
    num_end: number

    constructor(cz:Cozinheiro,nome: string,endereco: string,num_end: number){
        this.cz = cz
        this.nome = nome
        this.endereco = endereco
        this.num_end = num_end
    }
    setRestaurante(): void {
        this.cz.setCozinheiro()
        let nomeUp = leitor.question('Qual do nome Restaurante? ')
        let enderecoUp = leitor.question('Qual o endereco do Restaurante? ')
        let num_endUp = leitor.question('Qual o numero do endereco do Restaurante? ')
        this.nome = nomeUp
        this.endereco = enderecoUp
        this.num_end = num_endUp
    }
    getRestaurante(): void{
        console.log(`Ola o restaurante se chama ${this.nome}, e o seu cozinheiro se chama ${this.cz.nome}, o endereco é ${this.endereco} e o numero da rua é ${this.num_end}.`)
    }
}
// instancia da classe Cozinheiro
let chefTalles = new Cozinheiro('Talles',45,209)

// instancia da classe Restaurentes agregada com o objeto da classe Cozinheiro
//let divina = new Restaurante(chefTalles,'Divina','Av.Divina',800)

//console.log(divina.cz)

let chefNovo = new Cozinheiro('teste',50,20)
/*
chefNovo.getCozinheiro()
chefNovo.setCozinheiro()
chefNovo.getCozinheiro()
*/
let restauranteNovo = new Restaurante(chefTalles,'nunu','jejeje',986)

restauranteNovo.getRestaurante()
restauranteNovo.setRestaurante()
restauranteNovo.getRestaurante()