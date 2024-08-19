let rl = require('readline-sync')

export class Blobs {
    public codigo: string

    constructor(codigo: string) {
        this.codigo = codigo;
    }
    public inserirCodigo(): void {
        let codigo = rl.question('qual codigo voce quer inserir: ')
        this.codigo = codigo
    }
    public getCodigo(): void {
        console.log(`seu codigo é:${this.codigo}`)
    }
}

export class Commits {
    public commits: Array<Blobs> = []
    public historicoCommits: Array<Blobs> = []

    public inserirCommits(codigo: Blobs): void {
        let inserir = rl.question('voce quer inserir o codigo: (s-n) ')
        if (inserir === 's') {
            this.commits.push(codigo)
            this.historicoCommits.push(codigo)
        } else if (inserir === 'n') {
            console.log('seu codigo não sera inserido!')
        } else {
            console.log('opção invalida')
        }
    }

    public getCommits(): void {
        let escolha = rl.questionInt('qual commits voce quer vizualizar: (1)')
        console.log(`Seu commits é: ${this.commits.length - escolha}`)
    }

}

export class Branch {
    public branch: Array<Commits> = []

    public inserirBranch(codigo: Commits): void {
        let inserir = rl.question('voce quer inserir o commits na branch: (s-n)')
        if (inserir === 's') {
            this.branch.push(codigo)
        } else if (inserir === 'n') {
            console.log('seu codigo não sera inserido!')
        } else {
            console.log('opção invalida')
        }
    }
    public getBranch(): void {
        let escolha = rl.questionInt('qual branch voce quer vizualizar: (1)')
        console.log(`Seu commits é: ${this.branch.length - escolha}`)
    }
    public getHead(): void {
        console.log(`Seu ultimo backup: ${this.branch.length - 1}`);
    }
}

export class Repositorio {
    public branch: Branch[] = []

    public setRepo(branch: Branch): void {
        this.branch.push(branch)
    }


}

//this.commits.length - 1 == head
