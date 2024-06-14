import { Monstro } from "./Monstro"
export class Guerreiro {
nome: string
tipo: string
forca: number
saude: number

constructor (nome:string,tipo:string,forca:number){
    this.nome = nome
    this.tipo = tipo
    this.forca = forca
    this.saude = 100
}
atacar(inimigo:Monstro):void {
    const dano = this.forca
    console.log(`O ${this.nome} atacou o ${inimigo.nome}.`)
   
}

recebeDano (inimigo:Monstro):void {
       console.log(`O guerreiro ${inimigo.nome} atacou o ${this.nome}.`)
       let dano:number = this.saude - inimigo.forca
       
}

statusGuerreiro ():void {
    console.log(`O guerreiro possui a saude no nivel: ${this.saude} \n O guerreiro tem a força no nivel: ${this.forca} \n E o seu tipo continua sendo: ${this.tipo}`)
}

}