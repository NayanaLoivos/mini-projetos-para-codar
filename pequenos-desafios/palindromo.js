/*Palíndromo
Dado uma string, rearranje seus caracteres de forma que a string se torne um palíndromo 
(pode ser lido da esquerda para a direita ou da direita para a esquerda).
A entrada consiste de umas string composta de apenas letras em caixa alta (A-Z).
Considere que sempre será possível transformar a string em um palíndromo.*/

/*Única maneira de uma palavra não ser um palíndromo:
Se a palavra possuir a quantidade de duas ou mais letras ímpares, 
não será possível formar um palíndromo.*/

/*O código organiza cada uma string que pode ou não ser um palindromo.*/ 

const palindromo = "AADDDCC";

//transformando string em array
const palindromosplit = [];

for(let i= 0; i < palindromo.length; i++) {    
    palindromosplit.push(palindromo[i]);       
}

function analisaPalidromo(array) {

    //criando Map para saber a quantidade de cada uma letra dentro array
    let qtdCadaLetra = new Map();

    for(let i=0; i < palindromosplit.length; i++) {

        if(qtdCadaLetra.has(palindromosplit[i])) {
            qtdCadaLetra.set(palindromosplit[i], qtdCadaLetra.get(palindromosplit[i])+1);
        }else {
            qtdCadaLetra.set(palindromosplit[i], 1);
        }
    };
    console.log(qtdCadaLetra)

    //Buscar a quantidade de elementos ímpares existentes em qtdCadaLetra
    //Guardar os elementos impares que podem compor um palindromo de comprimento impar
    let contagemImpar = 0;
    let caractereImpar = "";

    for(let [a,b] of qtdCadaLetra) {
        if(b % 2 != 0) {
            contagemImpar++;
            console.log(contagemImpar)
            for(let i = 0; i < b; i++) {
                caractereImpar+=a;
            }
        }          
    }
    console.log(caractereImpar);
    //Averiguar se há mais de um elemento impar, se esse for caso, fim da código
    //Ou Averiguar se há um elemento impar e se o cumprimento do array é par, 
    //se esse for o caso, fim do código (porque não faz sentido ter um impar e que 
    //o array seja par)

    if(contagemImpar > 1 || contagemImpar === 1  && palindromosplit.length % 2 === 0) {
        return 'Não é um palíndromo';
    };

    //Gerando a primeira metade do palindromo

    let primeiraMetade = ''; let segundaMetade ='';

    for(let [a, b] of qtdCadaLetra) {

        let x = ''; 

        //Construir a string de base (contagem/2)
        //Ocorrência dos elementos atuais    
        for(let i = 0; i < Math.floor(b/2); i++){
            x = a;
        }

        //anexar a construção da string no final da primeira metade
        //e no começo da segunda metade
        primeiraMetade = primeiraMetade + x;
        segundaMetade = x + segundaMetade;
    };

    //Se há um carater ímpar, insira ele ao meio

    return (contagemImpar === 1) 
        ? (primeiraMetade + caractereImpar + segundaMetade) 
        : (primeiraMetade + segundaMetade);
};

console.log(analisaPalidromo(palindromo));


/*Exercicio analítico sobre as regras de negócio:
Como são as regras que compõem a organização dos palidromos abaixo:

    Entrada:
    "CBPPBFCFAA"
    "SQAADSDTQ"
    "CCA"
    "AADDDCC"

    Saída desejada:
    "CBPFAAFPBC"
    "SQADTDAQS"
    "CAC"
    "ACDDDCA"
*/