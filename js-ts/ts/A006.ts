// Tipagem de funções

function saudar(nome:string):string {
    return `Olá, ${nome}!`;
}
function calcularArea(largura:number, altura:number):number {
    return largura * altura;
}
function mensagem(texto:string, autor?:string) {
    console.log(autor? `${texto} autor(${autor})` : texto);
}

saudar("leo"); calcularArea(2, 3); mensagem("olá mundo", "leandro");
