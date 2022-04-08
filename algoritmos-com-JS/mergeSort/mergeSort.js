//mergeSort é pegar duas partes de um todo, separada, organiza e funde as duas partes.
//A ideia desse algoritmo é dividir para conquistar. Pegamos um problema grande, dividimos em partes pequenas, 
//a partir do momento que resolvemos as partes pequenas, a parte do total se resolve.
//Não é o único que se utiliza dessa forma de pensar.

const listaLivros = require('./arrayDesordenado.js');

function mergeSort(lista, nivelAlinhamento = 0) {

    console.log(`nível de aninhamento: ${nivelAlinhamento} `)
    console.log(lista)

    if( lista.length > 1 ){
        const meio = Math.floor(lista.length / 2) //primeiro encontramos o meio e precisamos que seja inteiro
        const parte1 = mergeSort(lista.slice(0, meio), nivelAlinhamento + 1); //recursividade
        const parte2 = mergeSort(lista.slice(meio, lista.length), nivelAlinhamento + 1); //recursividade
        lista = ordena(parte1, parte2);
        
    }

    return lista;

}

function ordena(parte1, parte2) {

    const resultadoOrdenado = [];
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;    

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        
        let produtoAtualParte1 = parte1[posicaoAtualParte1];
        let produtoAtualParte2 = parte2[posicaoAtualParte2];

        if(produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultadoOrdenado.push(produtoAtualParte1);
            posicaoAtualParte1++;            
        } else {
            resultadoOrdenado.push(produtoAtualParte2);
            posicaoAtualParte2++;
        }
    
    }

    return resultadoOrdenado.concat(posicaoAtualParte1 < parte1.length
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros));
