var leitor = require('readline-sync');
var Cozinheiro = /** @class */ (function () {
    function Cozinheiro(nome, idade, ano_xp) {
        this.nome = nome;
        this.idade = idade;
        this.ano_xp = ano_xp;
    }
    Cozinheiro.prototype.getCozinheiro = function () {
        console.log("Ola meu nome \u00E9 ".concat(this.nome, ", tenho ").concat(this.idade, " anos e sou chefe h\u00E1 ").concat(this.ano_xp, " anos."));
    };
    Cozinheiro.prototype.setCozinheiro = function () {
        var nomeUp = leitor.question('Qual o nome do cozinehiro? ');
        var idadeUp = leitor.question('Qual a idade do cozinehiro? ');
        var ano_xpUp = leitor.question('Qual o tempo de xp do cozinheiro? ');
        this.nome = nomeUp;
        this.idade = idadeUp;
        this.ano_xp = ano_xpUp;
    };
    return Cozinheiro;
}());
var Restaurante = /** @class */ (function () {
    function Restaurante(cz, nome, endereco, num_end) {
        this.cz = cz;
        this.nome = nome;
        this.endereco = endereco;
        this.num_end = num_end;
    }
    Restaurante.prototype.setCozinheiro = function () {
        var nomeUp = leitor.question('Qual do nome Restaurante? ');
        var enderecoUp = leitor.question('Qual o endereco do Restaurante? ');
        var num_endUp = leitor.question('Qual o numero do endereco do Restaurante? ');
        this.nome = nomeUp;
        this.endereco = enderecoUp;
        this.num_end = num_endUp;
    };
    Restaurante.prototype.getRestaurante = function () {
        console.log("Ola o restaurante se chama ".concat(this.nome, ", e o seu cozinheiro se chama ").concat(this.cz.nome, ", o endereco \u00E9 ").concat(this.endereco, " e o numero da rua \u00E9 ").concat(this.num_end, "."));
    };
    return Restaurante;
}());
// instancia da classe Cozinheiro
var chefTalles = new Cozinheiro('Talles', 45, 209);
// instancia da classe Restaurentes agregada com o objeto da classe Cozinheiro
//let divina = new Restaurante(chefTalles,'Divina','Av.Divina',800)
//console.log(divina.cz)
var chefNovo = new Cozinheiro('teste', 50, 20);
/*
chefNovo.getCozinheiro()
chefNovo.setCozinheiro()
chefNovo.getCozinheiro()
*/
var restauranteNovo = new Restaurante(chefTalles, 'nunu', 'jejeje', 986);
restauranteNovo.getRestaurante();
restauranteNovo.setCozinheiro();
restauranteNovo.getRestaurante();
