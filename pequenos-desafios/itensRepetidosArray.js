
//Retorne um array sem valores duplicados.
//1)Resolução 1:
let arrayRepetido = [1,2,3,3,2,4,5,4,7,3,10,10,89,90];

let arraySemRepetição = [...new Set(arrayRepetido)];

console.log(arraySemRepetição);

//2)Resolução 2:

let arraySemRepetir = [];

for(let item of arrayRepetido) {
    if(!arraySemRepetir.includes(item)) {
        arraySemRepetir.push(item);
    }
};
 console.log(arraySemRepetir);