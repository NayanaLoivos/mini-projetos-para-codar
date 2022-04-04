
//Numeros Primos
    //Possui apenas 2 divisores: 1 e ele mesmo.

function nPrimos(numero) {
    let numerosPrimos = [];
    let primos = true;
    for(let i = 2; i < numero; i++) {
        primos = true;
       
        for(let divisor = 2; divisor < i; divisor++) {
            if(i % divisor === 0) {
                primos = false;
            }
        }
        if(primos) {
            numerosPrimos.push(i);
            console.log(i)
        }
    }
return numerosPrimos;
}

console.log(nPrimos(8))