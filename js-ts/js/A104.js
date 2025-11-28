// HERANÇA EM CLASSES

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if (this.ligado == true) {
            console.log(`O dispositivo já está ligado.`);
            return;
        }
        console.log(`O dispositivo foi ligado.`);
        this.ligado = true;
    }
    desligar() {
        if (this.ligado == false) {
            console.log(`O dispositivo já está desligado.`); 
            return ;
        }
        console.log(`O dispositivo foi desligado.`);
        this.ligado = false;
    }
};

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome); 
        this.cor = cor;
    }
};

const d1 = new Smartphone('iPhone');
d1.ligar();
d1.ligar();
