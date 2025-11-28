const objA = {
    chaveA: 'Aummm' // : -> dois pontos representam um par chave-valor
};
const objB = {
    chaveB: 'B'
};
Object.setPrototypeOf(objB, objA); // objB herda de objA

const objC = new Object();
objC.chaveC = 'C';
Object.setPrototypeOf(objC, objB); // objC herda de objB


console.log(objB.chaveA);
console.log(objC.chaveA);
console.log(objC.chaveB);

// "={}" é igual a "new Object()"
console.log(Object.getPrototypeOf(objB));
console.log(Object.getPrototypeOf(objC));


// PT2 =======================================================================================================================
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

const p1 = new Produto('camiseta', 200);
Produto.prototype.desconto = function(percent) {
    this.preco = this.preco - ((this.preco / 100) * percent)
};

p1.desconto(40);
console.log(p1.preco);

const p2 = {
    nome: 'tenis',
    preco: 500
};

Object.setPrototypeOf(p2, Produto.prototype) // .prototype já que é uma classe
p2.desconto(10);
console.log(p2.preco) // não funciona sem a linha acima
