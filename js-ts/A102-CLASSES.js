// SUBSTITUI O PROTOTYPE -> CLASS LINKA FUNÇÕES NO PROTOTYPE AUTOMATICAMENTE

class Pessoa {
    constructor(nome, sobrenome) { // opcional
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando!`);
    }
};

const p1 = new Pessoa('Leandro', 'Augusto');
console.log(p1);
p1.falar();

console.log();

// COMPARATIVO - MANEIRA COM CONSTRUCTOR
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando!`);
}

const p2 = new Pessoa2('maria', 'das graças');
console.log(p2);
p2.falar();
