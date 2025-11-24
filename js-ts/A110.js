// async x await

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function promiseFunction(msg, tempo) {
    return new Promise((resolve, reject) => { // trecho deu bom -> resolve // deu erro -> reject
        setTimeout(() => {
            resolve(msg + ' - promise test');
        }, tempo);
    }); 
}

// VERSÃO ANTIGA -> PROMISES
promiseFunction('promise-1', rand(0, 3))
    .then(valor => {
        console.log(valor);
        return promiseFunction('promise-2', rand(0,3));
    })
    .then(valor2 => { // .then para pegar o valor da promise 2
        console.log(valor2);
        return promiseFunction('promise-3', rand(0, 3));
    })
    .then(valor3 => {
        console.log(valor3);
    })
    .catch(erro => console.log(erro));


async function exe() {
    const fase1 = await promiseFunction('async', rand(0, 3));
    console.log(fase1);

    const fase2 = await promiseFunction('async2', rand(0, 3));
    console.log(fase2);

    const fase3 = await promiseFunction('async3', rand(0, 3));
    console.log(fase3);
}
