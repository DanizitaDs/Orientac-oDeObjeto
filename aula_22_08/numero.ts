/* 3. Número Complexo

Crie uma classe TypeScript chamada `NumeroComplexo` que represente um número complexo. A classe deve fornecer as seguintes operações:

a) Construtor que recebe valores das partes real e imaginária.

b) Métodos getter/setter para os atributos da parte real e imaginária.

c) Método `somar(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o adiciona ao número complexo atual. (a+bi) + (c+di) = (a+c) + (b+d)i

d) Método `subtrair(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o subtrai do número complexo atual. (a+bi) - (c+di) = (a-c) + (b-d)i

e) Método `multiplicar(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o multiplica ao número complexo atual. (a+bi) * (c+di) = (ac - bd) + (ad + bc)i

f) Método `dividir(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o divide pelo número complexo atual. (a+bi) / (c+di) = (ac + bd) / (c² + d²) + (bc - ad) / (c² + d²)i

g) Método `equals(outroComplexo: NumeroComplexo): boolean` para comparação semântica dos números complexos.

h) Método `toString(): string` que gera e retorna a representação em string do número complexo.

i) Método `modulo(): number` que retorna o módulo do número complexo.
*/

var rl = require('readline-sync')

export class NumeroComplexo {
    private real: number;
    private imaginario: number;

    constructor(real: number, imaginario: number) {
        this.real = real;
        this.imaginario = imaginario
    }

    getRealeImaginario() {
        console.log(`seus valores são: x = ${this.real} e y = ${this.imaginario + 'i'}`)
    }

    setReal() {
        let escolha = rl.questionInt(`Insira o valor que queres inserir no real: `)
        this.real = escolha
    }

    setImaginario() {
        let escolha = rl.questionInt(`Insira o valor que queres inserir no Imaginario: `)
        this.imaginario = escolha
    }

    somar(outroComplexo: NumeroComplexo): NumeroComplexo {
        let novoReal = this.real + outroComplexo.real
        let novoImaginario = this.imaginario + outroComplexo.imaginario
        return new NumeroComplexo(novoReal, novoImaginario)
    }

    subtrair(outroComplexo: NumeroComplexo): NumeroComplexo {
        let novoReal = this.real - outroComplexo.real
        let novoImaginario = this.imaginario - outroComplexo.imaginario
        return new NumeroComplexo(novoReal, novoImaginario)
    }

    multiplicar(outroComplexo: NumeroComplexo): NumeroComplexo {
        let novoReal = (this.real * outroComplexo.real)
        let novoImaginario = (this.real * outroComplexo.imaginario)
        return new NumeroComplexo(novoReal, novoImaginario)
    }

    dividir(outroComplexo: NumeroComplexo): NumeroComplexo {
        let novoReal = (this.real / outroComplexo.real)
        let novoImaginario = (this.real / outroComplexo.imaginario)
        return new NumeroComplexo(novoReal, novoImaginario)
    }

    equals(outroComplexo: NumeroComplexo): boolean {
        if (Math.sqrt((outroComplexo.real - this.real) ** 2 + (outroComplexo.imaginario - this.imaginario) ** 2)) {
            console.log(`seus numeros são iguais`)
            return true
        } else {
            console.log(`os numeros são diferentes`)
            return false
        }
    }

    toString(): string {
        return `(${this.real} + ${this.imaginario}i)`
    }

    modulo(outroNumero): number {
        return Math.sqrt(this.real * outroNumero.real + this.imaginario * outroNumero.imaginario);
    }
}


let num1 = new NumeroComplexo(10, 12)
let num2 = new NumeroComplexo(12, 13)

num1.dividir(num2)