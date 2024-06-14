function exibirMenu () {
    console.log('Menu de opções');
    console.log('1. Adicionar Personagem');
    console.log('2. Treinar o Chakra');

}
const readlineSync = require('readline-sync');
function main () {
    let encerrar = false;
    while (!encerrar) {
        exibirMenu()       
         let opcao = readlineSync.question('Digite a opção desejada: ');
        encerrar = escolha(opcao)
    }
}
main();
function escolha (opcao) {
    switch (opcao) {
        case '1':
            adicionarPersonagem(personagemPessoal)
            break;
        case '2':
            treinarChakra(personagemPessoal)
            break;
        case '3':
            treinarChakra(personagemPessoal)
            break;
        case '7':
            console.log('Encerrando programa...')
            return true;
        default:
            console.log('Opção inválida')
    }
    return false;
}