// polimorfismo ===== conta -> conta poupança : conta corrente
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function(val) {
    console.log(`OP - SAQUE - R$${val}`)
    if (val > this.saldo) {
        console.log(`SALDO INSUFICIENTE: R$${this.saldo}\n`)
        return;
    }
    this.saldo -= val;
    this.consultaSaldo();
    return;
}
Conta.prototype.depositar = function(val) {
    this.saldo += val;
    console.log(`OP - DEPÓSITO - R$${val}`)
    this.consultaSaldo();
}
Conta.prototype.consultaSaldo = function() {
    console.log(`SALDO ATUAL: R$${this.saldo.toFixed(2)}\n`);
    return;
}
// ========================== conta corrente
function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;

}
CC.prototype = Object.create(Conta.prototype);

CC.prototype.sacar = function(val) {
    console.log(`OP - SAQUE - R$${val}`)
    if (val > this.saldo + this.limite) { // saldo negativo para conta corrente
        console.log(`SALDO INSUFICIENTE: R$${this.saldo}\n`)
        return;
    }
    this.saldo -= val;
    this.consultaSaldo();
    return;
}
CC.prototype.depositar = function(val) {
    this.saldo += val;
    console.log(`OP - DEPÓSITO - R$${val}`)
    this.consultaSaldo();
}
CC.prototype.consultaSaldo = function() {
    console.log(`SALDO ATUAL: R$${this.saldo.toFixed(2)}\n`);
    return;
}


const conta = new Conta(0, 1, 100);
console.log(conta);
const cc = new CC(0, 2, 10, 100)

console.log(`\nPOLIMORFISMO:`);
conta.sacar(500);
cc.sacar(500);
