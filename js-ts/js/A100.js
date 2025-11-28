// FACTORY FUNCTIONS

function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando!`);
        }
    };

    // ACOPLAGEM DOS MÉTODOS NO PROTOTYPE 
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: {value: sobrenome},
    });

}

const p1 = new criaPessoa('leandro', 'a.');
p1.falar();
console.log(p1);

// MANEIRA 2
const comer = {
    comer() {
        console.log(`${this.nome} está comendo!`);
    }
}
function criaPessoa2() {
    return Object.create(pessoaPrototype2, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}
const pessoaPrototype2 = {...comer};
pessoaPrototype2.comer();


