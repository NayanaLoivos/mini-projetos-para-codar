const livros = require('./livros-objeto.js');

let menorValor = 0;
for(let atual = 0; atual < livros.length; atual++) {
    
    if(livros[atual].preco < livros[menorValor].preco) {
        menorValor = atual;
    }   
}

console.log(`O livro mais barato custa R$ ${livros[menorValor].preco} e título é ${livros[menorValor].titulo}.`);