/*  2. Ponto2D

Crie uma classe TypeScript chamada `Ponto2D` que represente um ponto no plano cartesiano. Além dos atributos identificados, a classe deve oferecer os seguintes membros:

a) Construtores sobrecarregados que permitam a inicialização do ponto:

i) Construtor padrão (sem parâmetros) na origem do plano 2D.

ii) Construtor com dois parâmetros `x` e `y` do tipo `number` para definir as coordenadas do ponto.

iii) Construtor que aceita outro objeto do tipo `Ponto2D` para criar um ponto com as mesmas coordenadas.

b) Métodos de acesso (getter/setter) para os atributos `x` e `y`.

c) Métodos sobrecarregados para movimentação do ponto com os mesmos parâmetros indicados para os construtores.

d) Método `equals(outroPonto: Ponto2D): boolean` para comparação semântica dos pontos.

e) Método `toString(): string` para representação do objeto como string.

f) Método `distancia(outroPonto: Ponto2D): number` para calcular a distância do ponto atual até outro ponto.

g) Método `clone(): Ponto2D` que cria e retorna uma cópia do ponto.
*/

var rl = require('readline-sync')

export class Ponto2D {
    x: number;
    y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }
    getXeY() {
        console.log(`seus valores são: x = ${this.x} e y = ${this.y}`)
    }

    setX() {
        let escolha = rl.questionInt(`Insira o valor que queres inserir no X: `)
        this.x = escolha
    }

    setY() {
        let escolha = rl.questionInt(`Insira o valor que queres inserir no Y: `)
        this.y = escolha
    }

    movimentacao() {
        let escolhaX = rl.questionInt(`Insira o valor de X: `)
        let escolhaY = rl.questionInt(`Insira o valor de Y: `)
        this.x = escolhaX
        this.y = escolhaY
    }

    equals(outroPonto: Ponto2D): boolean {
        if (Math.sqrt((outroPonto.x - this.x) ** 2 + (outroPonto.y - this.y) ** 2)) {
            console.log(`os pontos são iguais`)
            return true
        } else {
            console.log(`os pontos são diferentes`)
            return false
        }
    }

    toString(): string{
        return `(${this.x},${this.y})`
    }

    distancia(outroPonto: Ponto2D): number{
        return Math.sqrt((outroPonto.x - this.x) ** 2 + (outroPonto.y - this.y) ** 2)
        
    }

    clone(): Ponto2D{
        let clone2D = new Ponto2D()
        clone2D.x = this.x
        clone2D.y = this.y
        return clone2D
    }

}

export class Ponto2DComCoordenadas extends Ponto2D {
    constructor(x: number, y: number) {
        super()
        this.x = x;
        this.y = y;
    }
}

export class Ponto2DTerceiraClasse extends Ponto2D {
    outroPonto: Ponto2D
    constructor(outroPonto: Ponto2D) {
        super()
        this.x = outroPonto.x
        this.y = outroPonto.y
    }
}













































































