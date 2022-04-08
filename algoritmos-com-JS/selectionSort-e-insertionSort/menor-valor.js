const livros = require('./livros-objeto.js');

/*
//Modelo simples anterior à function menorValor():

let menorValor = 0;

for(let atual = 0; atual < livros.length; atual++) {
        
 if(livros[atual].preco < livros[menorValor].preco) {
     menorValor = atual;
 }   
}
   
console.log(`O livro de menor valor custa R$ ${livros[menorValor].preco} e o título é ${livros[menorValor].titulo}`);
*/ 

//Complexidade de processamento da função menorValor():
//Para uma lista de 6 elementos temos entre 6 e 12 operações dependendo se
//entrar no if ou não, então podemos dizer que esse código faz entre:
// n operações e n * 2

function menorValor(arrProdutos, posicaoInicial) {

    let menorValor = posicaoInicial;

    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        
        if(arrProdutos[atual].preco < arrProdutos[menorValor].preco) {
            menorValor = atual;
        }   
    }
    return menorValor;
}

module.exports = menorValor;

