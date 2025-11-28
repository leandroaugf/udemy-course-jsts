// Tipagem de funções
function saudar(nome) {
    return "Ol\u00E1, ".concat(nome, "!");
}
function calcularArea(largura, altura) {
    return largura * altura;
}
function mensagem(texto, autor) {
    console.log(autor ? "".concat(texto, " autor(").concat(autor, ")") : texto);
}
saudar("leo");
calcularArea(2, 3);
mensagem("olá mundo", "leandro");
