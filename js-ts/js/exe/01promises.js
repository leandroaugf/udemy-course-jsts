function fazerTarefa(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero % 2 == 0) resolve("número par");
            else reject("número impar");
        }, 100);
    });
}

// aqui chama a Promise com um número e trata then/catch

