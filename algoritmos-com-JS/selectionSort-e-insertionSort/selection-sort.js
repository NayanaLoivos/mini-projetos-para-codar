const livros = require('./livros-objeto.js');
const menorValor = require('./menor-valor.js');


//Complexidade de processamento do for:
//Para uma lista de 6 elementos temos entre 6 e 12 operações dependendo se
//entrar no if ou não, então podemos dizer que esse código faz entre:
// n operações , com for() dentro dele que pode tanta fazer n operações quanto n *2, então,
// temos aqui n ^ 2 ou 2 * n ^ 2.

//for()

    for(let atual = 0; atual < livros.length; atual++) {

        let menor = menorValor(livros, atual);

        let livroAtual =  livros[atual];
        
        let menorPreco =  livros[menor];
        
        livros[atual] = menorPreco;
        livros[menor] = livroAtual;
    }

    console.log(livros);

//Método sort()
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//foreach()

// livros.forEach((_, indice) => {

//     let menor = menorValor(livros, indice);

//     let livroAtual = livros[indice];
//     let menorPreco = livros[menor];

//     livros[indice] = menorPreco;
//     livros[menor] = livroAtual;
// })

// console.log(livros);

//for...of()

// for(let valor of livros[preco]) {

//     let menor = menorValor(livros, valor);
   

//     let livroAtual = livros[valor];    
//     let livroMenorPreco = livros[menor];
   
//     livros[valor] = livroMenorPreco;
//     livros[menor] = livroAtual;    
    
// } 
// console.log(livros); 
