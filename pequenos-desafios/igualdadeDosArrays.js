//Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
//Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

//Resolução 1:

function igualdadeDeArrays(array1,array2) {
    
    return Array.isArray(array1) 
    && Array.isArray(array2) 
    && array1.length === array2.length 
    && array1.every((elem, index) => elem === array2[index]);
}

console.log("Igualdade de arrays: ", igualdadeDeArrays([1,2,3,4],[1,2,3,4]));

//Resolução 2:
function test7(array1, array2)
{
    let resultado = true;
    if(array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            if(array1[i] !== array2[i]) {
                resultado = false;
                break;
            }
        }
    }else {
        resultado = false;
    }
    return resultado;
}
console.log(`Test7:`,test7([1,2,3,4],[1,2,3,4]));