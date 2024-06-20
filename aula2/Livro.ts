class Livro {
    titulo: string
    autor: string
    anoDePublicacao: number

    constructor(titulo: string, autor: string, anoDePublicacao: number){
        this.titulo = titulo
        this.autor = autor
        this.anoDePublicacao = anoDePublicacao
    }
    obterDetalhes(): string {
        return `O Livro ${this.titulo} tem um autor que se chama: ${this.autor} e sua data de publicacao é ${this.anoDePublicacao}.`
    }
}

let myLivro: Livro = new Livro('baba louca dms','jeferson meira',20)

myLivro.obterDetalhes()