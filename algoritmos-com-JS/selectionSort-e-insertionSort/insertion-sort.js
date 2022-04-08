// const livros = require('./livros-objeto.js');
// const troca = require('./troca.js');

//O algoritmo insert sort - insere os elementos na posição 
//correta com relação ao que vem antes.

function insertionSort(lista) { 

    for(let atual = 0; atual < lista.length; atual++) {

        let analise = atual;

        while(analise > 0 && lista[analise].preco < lista[analise -1].preco) {

            troca(lista, analise);
            
            analise --;
        }
    }

    console.log(lista);
}

insertionSort(livros);

