/*  1. Contador

Crie uma classe TypeScript chamada `Contador` que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer os seguintes métodos:

a) `zerar()`: Reseta o valor do contador para zero.

b) `incrementar()`: Incrementa o valor do contador em uma unidade.

c) `valor(): number`: Um método que retorna o valor atual do contador.

*/

export class Contador {
    private contador: number;

    constructor() {
        this.contador = 0;
    }
    public zerar(): void {
        this.contador =- 0;
    }
    public incrementar(): void {
        this.contador += 1;
    }

    public valor(): number {
        return this.contador;
    }
}