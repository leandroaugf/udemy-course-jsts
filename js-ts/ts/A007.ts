// TYPE ALIAS X INTERFACES

type Produto = {
    nome: string,
    preco: number, 
    categoria: "eletronico" | "escritorio" | "alimento"
}

type Pessoa = {
    nome: string,
    idade: number
}

interface Funcionario extends Pessoa {
    cargo: string,
    salario: number
}

let f: Funcionario = {
    nome: "gean", 
    idade: 33, 
    cargo: "auxiliar", 
    salario: 4000
}

console.log(f);
