const pessoas = [
    {id: 2, nome: 'bianca'},
    {id: 3, nome: 'glenda'},
    {id: 1, nome: 'leandro'},
];
const novasPessoas = {};

for (const pessoa of pessoas) {
    // é como se fosse -> const id = pessoa.id
    const { id } = pessoa; // pegando somente a propriedade 'id' do objeto pessoa e criando uma variável 'id' com esse valor
    novasPessoas[id] = {...pessoa}; // operador spread (...) para copiar todas as propriedades do objeto pessoa para um novo objeto
};
console.log(`ESTRUTURA NORMAL -------------------------------------`)
console.log(novasPessoas); // NÃO PRESERVA A ORDEM ORIGINAL -> para resolver:

const novasPessoas2 =  new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas2.set(id, { ...pessoa });
}
console.log(`\nESTRUTURA MAP -------------------------------------`);
console.log(novasPessoas2);

for (const [idexterno, { id, nome } ] of novasPessoas2) {
    console.log(idexterno, id, nome); // aqui tem que ser 'id', outro nome não funciona
}
