// RELEMBRANDO reduce

let vect = [1,2,3,4,5];
let soma = vect.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0); // 0 -> valor inicial do acumulador 
console.log(`SOMA TOTAL: ${soma}`);
