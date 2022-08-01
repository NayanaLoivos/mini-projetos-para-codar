    /*O que é RECURSIVIDADE?
    É o ato de uma função invocar a si mesma.
    
    O que toda função recursividade deve descrever?
    1• A invocação de si mesma;

    function fatorial(numero){

        return fatorial(numero);
    }
    2• Uma estratégia para que pare de ser invocada (base case).

     function contar1A10(n){
        if(n === 0){return 0};

        return n * fatorial(n -1);
    }
    
    O que é uma sequência recursiva?
    É quando a partir de um termo anterior conseguimos descobrir 
    qualquer outro termo utilizando um padrão. E a Recursividade,
    de maneira geral, é usada para descrever um processo de repetição de 
    um padrão e a partir dele determinamos os outros termos.
    */
    
    // Função fatorial de um número 
    //Matemática: n! = n * (n - 1)

    function fatorial(n) {

        let resultado = n;
    
        for(let i = n; i > 1; i--) {
            resultado += resultado * (n - i);
        }
        return resultado;
    }    

    //Função fatorial recursiva

    function fatorialRecursiva(n) {

        if(n === 1){return 1};

        return n * fatorialRecursiva(n -1);
    }


  console.log(fatorialRecursiva(5));

    