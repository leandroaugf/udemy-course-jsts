// INFERÊNCIA DE TIPOS
let n = 10;
function soma(x:number, y:number) {
    return x + y; // inferência: number
}
console.log(n);
console.log(soma(n, n));
