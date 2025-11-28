// ENUMS x LITERAL TYPES : advanced

enum CategoriaLivro {
    FICCAO,
    HISTORIA,
    BIOGRAFIA
}
type Livro = {
    titulo: string,
    paginas: number,
    categoria: CategoriaLivro
}

let l:Livro = {
    titulo: "O alquimista",
    paginas: 100,
    categoria: CategoriaLivro.HISTORIA
}
console.log(l);
