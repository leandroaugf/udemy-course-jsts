// Object.keys() : Retorna as chaves
// Object.freeze() : Congela o objeto
// Object.defineProperties() : altera as propriedades
// Object.defineProperty() : altera uma propriedades

const product = {name: 'fan160', value: 15500}

for (let entry of Object.entries(product)) {
    console.log(entry)
    console.log(entry[0], entry[1]);
    console.log()
}
    
for (let [key, value] of Object.entries(product)) {
    console.log(key, value);
}

