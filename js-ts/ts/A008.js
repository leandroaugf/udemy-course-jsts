// ENUMS x LITERAL TYPES : advanced
var CategoriaLivro;
(function (CategoriaLivro) {
    CategoriaLivro[CategoriaLivro["FICCAO"] = 0] = "FICCAO";
    CategoriaLivro[CategoriaLivro["HISTORIA"] = 1] = "HISTORIA";
    CategoriaLivro[CategoriaLivro["BIOGRAFIA"] = 2] = "BIOGRAFIA";
})(CategoriaLivro || (CategoriaLivro = {}));
var l = {
    titulo: "O alquimista",
    paginas: 100,
    categoria: CategoriaLivro.HISTORIA
};
console.log(l);
