import { Data } from "./Calendario"

export class DataBase {
    data: Data[]

    adicionarData(data: Data): void {
        this.dia.push(data)
        this.ano.push(data)
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