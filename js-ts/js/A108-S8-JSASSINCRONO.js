// PROMISES: RETORNO DAS FRASES 1, 2 E 3 EM ORDEM

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function tempoo(msg, tempo) {
    return new Promise((resolve, reject) => { // trecho deu bom -> resolve // deu erro -> reject
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    }); 

}

tempoo('frase 1', rand(1,3))
    .then(resposta => {
        console.log(resposta); // frase 1 impressa aqui
        return tempoo('frase 2', rand(1, 4));
    })
    .then(resposta => {
        console.log(resposta); // frase 2 impressa aqui
        return tempoo('frase 3', rand(1, 3));
    }).then(resposta => {
        console.log(resposta); // frase 3 impressa aqui
        return;
    })
    .catch(e => {
        console.log(`ERRO: ${e}`);
    });
console.log(`primeira frase, antes dos promises.`);