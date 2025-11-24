// MÉTODOS PARA PROMISES

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function tempoo(msg, tempo) {
    return new Promise((resolve, reject) => { // trecho deu bom -> resolve // deu erro -> reject
        setTimeout(() => {
            resolve(msg + ' - promise test');
        }, tempo);
    }); 

}

const promises = [
    tempoo("promise 1", 1000),
    tempoo("promise 2", 3000),
    'valor3'
];

// MÉTODO-1 : ALL
Promise.all(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro);
    })
