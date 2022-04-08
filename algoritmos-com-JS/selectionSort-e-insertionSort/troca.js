function troca(lista, analise) {

    let itemAnalise = lista[analise];
    let intemAnterior = lista[analise -1];

    lista[analise] = intemAnterior;
    lista [analise -1] = itemAnalise;
}

module.exports = troca;