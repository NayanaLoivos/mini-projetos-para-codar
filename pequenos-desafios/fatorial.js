    //Função fatorial de um número

    function fatorial(n) {
        let resultado = n;
    
        for(let i = n; i > 1; i--){
            resultado += resultado * (n - i);
        }
        return resultado;
    }