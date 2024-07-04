var leitor = require('readline-sync')
class Jogo {
    public titulo:string
    protected genero:string
    protected classificacao:number
    constructor(titulo:string,genero:string,classificacao:number) {
        this.titulo = titulo
        this.genero = genero
        this.classificacao = classificacao
        
    }
    public getJogo():void{
        console.log(`o titulo do jogo é ${this.titulo} e o genero é ${this.genero} e sua classificação é de ${this.classificacao} anos.`)
    }
    public setJogo():void{
        let tituloUp = leitor.question('Qual o nome do titulo do jogo? ')
        let generoUp = leitor.questionInt('Qual e o genero do jogo? ')
        let classificacaoUp = leitor.questionInt('Qual foi a classificacao do jogo? ')
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacao = classificacaoUp
    }
}

class jogoEletronico extends Jogo{
    private plataforma:string
    super(titulo:string, genero:string, classificacao:number,plataforma:string){
    this.titulo = titulo
    this.genero = genero
    this.classificacao = classificacao
    this.plataforma = plataforma
    }
    public getPlataforma():void{
        console.log(`o titulo é ${this.titulo} o genero é ${this.genero} e a classificação é ${this.classificacao} e sua platamorma é ${this.plataforma}`)
    }
    setJogo():void{
        let tituloUp = leitor.question('Qual o nome do titulo do jogo? ')
        let generoUp = leitor.questionInt('Qual e o genero do jogo? ')
        let classificacaoUp = leitor.questionInt('Qual foi a classificacao do jogo? ')
        let plataformaUp = leitor.questionInt('Qual a plataforma do jogo? ')
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacao = classificacaoUp
        this.plataforma = plataformaUp
    }
}
class jogoTabauleiro extends Jogo{
    private numeroJogadores: number
    super(titulo:string, genero:string, classificacao:number,numeroJogadores:number){
        this.titulo = titulo
        this.genero = genero
        this.classificacao = classificacao
        this.numeroJogadores = numeroJogadores
    }
    getPlataforma():void{
        console.log(`o titulo é ${this.titulo} o genero é ${this.genero} e a classificação é ${this.classificacao} e sua qntd de jogadores é ${this.numeroJogadores}, e a quantidade de jogadores ${this.numeroJogadores}`)
    }
    setJogo():void{
        let tituloUp = leitor.question('Qual o nome do titulo do jogo? ')
        let generoUp = leitor.questionInt('Qual e o genero do jogo? ')
        let classificacaoUp = leitor.questionInt('Qual foi a classificacao do jogo? ')
        let numeroJogadoresUp = leitor.questionInt('Qual a quantidade de jogadores? ')
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacao = classificacaoUp
        this.numeroJogadores = numeroJogadoresUp
    }
}

class BibliotecaDeJogos {
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



