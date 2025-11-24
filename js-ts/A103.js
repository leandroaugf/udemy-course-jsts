// GETTERS x SETTERS

const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }
    set velocidade(val) {
        console.log('SETTER');
        if (typeof val !== 'number') return;
        if (val < 0 || val > 100) return; 
        this[_velocidade] = val;
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    frear() {
        if (this[_velocidade] >= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('gol');
// for (let i = 0; i <= 200; i++) c1.acelerar();
c1.velocidade = 22; // setter acessado automaticamente
console.log(c1);
console.log(c1.velocidade); // getter acessado automaticamente


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

console.log();
const p1 = new Pessoa('leandro', 'a f s');
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
