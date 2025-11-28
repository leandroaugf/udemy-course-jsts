// VALIDANDO UM CPF

function validaCPF(cpf) {
    Object.defineProperty(this, 'cpf', {
        enumerable: true,
        get: function() {
            return cpf.replace(/\D+/g, '')
        }
    });
}

validaCPF.prototype.valida = function() {
    if (typeof this.cpf === 'undefined') return false;
    if (this.cpf.length !== 11) return false;
    
    const cpfParcial = this.cpf.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCPF = cpfParcial + digito1 + digito2;
    
    if (this.isSequencia()) return false;
    return novoCPF === this.cpf;
};

validaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpf[0].repeat(this.cpf.length);
    return sequencia === this.cpf;
};

validaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let reg = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, val) => { // ARROW FUNCTION
        
        ac += (reg * Number(val))
        reg--;
        return ac;
        
    }, 0); // 0: valor inicial de ac
    
    const digito = 11 - (total % 11)
    return digito > 9 ? 0 : digito;
};

const cpf = new validaCPF('705.484.450-52'); // 094.080.246-56
cpf.valida() ? console.log(`CPF: ${cpf.cpf} é válido`) : console.log(`CPF: ${cpf.cpf} é inválido`);

