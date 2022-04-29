//8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

//Resolução 1:

function removeAninhamentosArray(array)
{
   return arraySemAninhamentos = array.flat();    
}

console.log(`Remove aninhamentos de array:`,removeAninhamentosArray([1, 2, [3], [4, 5]]));

//Resolução 2:

function removeAninhamentosArray(array)
{
    let resultado = [];
    for (const elemento of array) {
        if(!Array.isArray(elemento)) {
            resultado.push(elemento)
        }else {
            for (const arrayElemento of elemento) {
                resultado.push(arrayElemento)
            }
        }
    }
    return resultado;
}
console.log(`Remove aninhamentos de array:`,removeAninhamentosArray([1, 2, [3], [4, 5]]));