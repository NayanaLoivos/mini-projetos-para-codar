/*Palíndromo
Dado uma string, rearranje seus caracteres de forma que a string se torne um palíndromo 
(pode ser lido da esquerda para a direita ou da direita para a esquerda).
A entrada consiste de umas string composta de apenas letras em caixa alta (A-Z).
Considere que sempre será possível transformar a string em um palíndromo.*/

const palindromo = "SQAADSDTQ";

let palindromoBack = [];

for(let i= palindromo.length-1; i >= 0; i--) {
    palindromoBack.push(palindromo[i]);
}

console.log(palindromoBack);