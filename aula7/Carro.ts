var leitor = require('readline-sync')

export class Carro {
    Tanque: number
    KM: number
    Marca: string

    constructor (Tanque:number,KM: number,Marca: string){
        this.Tanque = Tanque
        this.KM = KM
        this.Marca = Marca
    }

// esse metodo serve para calcular a viagem em relacao a gasolina
    andar():void {
        let distancia = leitor.questionInt('Qual a Distancia que o seu carro vai percorrer? ')
        let combustivel = this.Tanque - (this.KM / distancia)
        if (this.Tanque >= combustivel){
            this.Tanque = combustivel
            console.log(`Voce andou ${distancia} KM`)
            }else{
                console.log('Voce nao tem combustivel suficiente para andar')
        }
    }
// esse metodo serve para mostrar todas as infromacoes do codigo
    getCarro():void {
        console.log(`Marca: ${this.Marca}, Tanque: ${this.Tanque}, km: ${this.KM}`)
    }
// esse metodo serve para mostrar quanto possui de gasolina
    obterGasolina(){
        console.log(`Voce atualmente possui ${this.Tanque} de Gasolina.`)
    }
 // esse metodo serve para adicionar gasolina
    adicionarGasolina(){
        let adicionar = leitor.questionInt('Quanto de Gasolina voce deseja adicionar? ')
        this.Tanque += adicionar
        console.log(`Voce possui atualmente ${this.Tanque} de gasolina. `)    
    }
   // esse codigo serve para cadastrar 10 carros no sistema
    Carro10(): void{
        let tanque = leitor.questionInt('Quanto de tanque o seu carrinho consegue consumir? ')
        let KM = leitor.questionInt(`Quanto de KM o seu carrinho vai percorrer? `)
        let marca = leitor.question(`Qual a marca do seu carrinho? `)
        this.Tanque = tanque
        this.KM = KM
        this.Marca = marca
    
        
    }
}

class Garagem{
    
carros: Carro[] = []
// esse metodo é continuação do metodo acima
    addCarro(carro: Carro):void{
        if(this.carros.length > 9){
            console.log('A garagem esta cheia')
        }else{
            this.carros.push(carro)
        }
    }
// esse metodo serve para remover um carro da garagem
    remover():void {
        let nomeremovido = leitor.question("qual Carro deseja remover")
        this.carros = this.carros.filter(carro => carro.Marca !== nomeremovido)
    }
}
