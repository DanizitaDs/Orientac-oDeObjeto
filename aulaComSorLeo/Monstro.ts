import { Guerreiro } from "./Guerreiro"
export class Monstro {
    nome: string
    forca: number
    saude: number
    
    constructor (nome:string){
        this.nome = nome
        this.forca = 50
        this.saude = 10
    }
    atacar(inimigo:Guerreiro) {
     console.log(`O ${this.nome} atacou o ${inimigo.nome}.`)
    let atacar:number = this.forca - inimigo.saude
    }

    recebeDano (inimigo:Guerreiro) {
        console.log(`O guerreiro ${inimigo.nome} atacou o ${this.nome}.`)
        let dano:number = this.saude - inimigo.forca
        
    }
    statusMonstro (){
        console.log(`O guerreiro possui a saude no nivel: ${this.saude} \n O guerreiro tem a força no nivel: ${this.forca} `)
    }
}