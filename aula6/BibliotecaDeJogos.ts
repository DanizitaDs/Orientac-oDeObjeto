// var leitor = require('readline-sync')
import { Jogo } from "../aula5/Trabalho"
export interface interfaceBiblioteca{
    jogos: Jogo[]
    adicionarJogo()
    removerJogo()
    getJogos()
}

export class BibliotecaDeJogos {
    jogos: Jogo[]

    adicionarJogo(jogo: Jogo): void {
        this.jogos.push(jogo)
    }
    removerJogo(jogo):void{
        this.getJogos()
        let nomeremovido = leitor.question("qual jogo deseja remover")
        this.jogos = this.jogos.filter(jogo => jogo.titulo !== nomeremovido)
    }
    getJogos():void{
        for(let jogo of this.jogos){
            jogo.getJogo()
            }
        }
    }
