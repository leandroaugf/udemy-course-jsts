// A95: HERANÇA - JS não tem herança, por isso emulamos no PROTOTYPE
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {this.preco += quantia;}
Produto.prototype.desconto = function(quantia) {this.preco -= quantia;}

function Camiseta(nome, preco, cor) { 
    Produto.call(this, nome, preco); 
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const produto = new Produto('produto', 1);
const regata = new Camiseta('regata', 60, 'preto');

regata.aumento(12.50);
console.log(regata);
console.log(produto);

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(value) {
            if (typeof value !== 'number') return;
            estoque = value;
        },
    })

}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
Caneca.prototype.aumento = function(percentual) { // SOBRESCREVENDO A FUNÇÃO
    this.preco = this.preco + (this.preco * percentual) / 100
}

const caneca = new Caneca('caneca cruzeiro', 10, 'porcelana', 80);
caneca.aumento(50);
console.log(caneca.preco)
