// 93 - PROTOTYPES : SE NÃO TEM DIRETAMENTE NO OBJETO, PROCURA NO PROTOTYPE
//      PROTOTYPES : HERANÇA - ECONOMIZA MUITA MEMÓRIA.
//      PROTOTYPES : UM MÉTODO 'FALAR' EM PROTOTYPE SUBSTITUI 100 MÉTODOS CRIADOS EM 100 INSTÂNCIAS

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.sobrenome = sobrenome;

    //this.apresentacao = () => `Olá, meu nome é ` + nome + ` ` + sobrenome + ` e eu tenho ${idade} anos.`
}

// Pessoa.prototype === leandro.__proto__ 
Pessoa.prototype.apresentacao = function() { // ESSA FUNÇÃO É SOBRESCRITA PELA ACIMA, CASO não esteja comentada
    return `TESTE: Olá, meu nome é ` + this.nome + ` ` + this.sobrenome + ` e eu tenho ${this.idade} anos.`;
};

const leandro = new Pessoa('leandro', 'augusto', 22);
console.log()
console.log(leandro.apresentacao())
console.log()
