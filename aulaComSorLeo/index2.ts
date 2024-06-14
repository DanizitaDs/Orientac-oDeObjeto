import { Guerreiro } from "./Guerreiro";
import { Monstro } from "./Monstro";

const novoGuerreiro:Guerreiro = new Guerreiro('sasa','arqueira',1000)
const novoMonstro:Monstro = new Monstro('Gigi')

novoGuerreiro.atacar(novoMonstro)
novoGuerreiro.recebeDano(novoMonstro)
novoGuerreiro.statusGuerreiro()
novoMonstro.atacar(novoGuerreiro)
novoMonstro.recebeDano(novoGuerreiro)
novoMonstro.statusMonstro()