// MÉTODOS DE INSTÂNCIAS e MÉTODOS ESTÁTICOS
class ClasseExemplo {
    constructor(nome) {
        this.nome = nome;
    }

    // MÉTODOS DE INSTÂNCIA - precisa de instância
    sub(x, y) {
        return `${x} - ${y} = ${x - y}`;
    }

    // MÉTODO ESTÁTICO - não precisa de instância
    static soma(x, y) {
        return `${x} + ${y} = ${x + y}`;
    }
    static show() { // métodos estáticos não têm acesso aos dados da classe: "nome, por exemplo;
        return this;
    }
}

const v = new ClasseExemplo('name');
console.log(v.sub(9, 1)); // uso da variável 'v'

console.log(ClasseExemplo.soma(2, 3)); // uso direto da classe
console.log(ClasseExemplo.show());
