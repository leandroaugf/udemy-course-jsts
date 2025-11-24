const product = {nome: 'xre300', value: 27000, year: '2022/1'};
console.log(product)
product.nome = 'sahara 300' // altera o nome

fieldsProduct = Object.keys(product);
console.log(fieldsProduct);

Object.freeze(product); // product cant be changed anymore
product.nome = 'tiger'; // wont be applied
console.log();

const product2 = {nome: 'TIGER 800', value: 51800, year: '2018/1'}
console.log(product2)
delete product2.year; // deleta uma propriedade do obj.
console.log(product2)
