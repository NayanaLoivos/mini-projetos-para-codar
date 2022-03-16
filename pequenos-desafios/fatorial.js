    // Função fatorial de um número 

    function fatorial(n) {
        let resultado = n;
    
        for(let i = n; i > 1; i--){
            resultado += resultado * (n - i);
        }
        return resultado;
    }    


    // Looping sobre caracteres da string

    function vogaisEConsoantes(frase) {
        for(let i = 0; i < frase.length; i++) {  
            if(frase[i] === `a`|| frase[i] === `e` || frase[i] === `i` || frase[i] === `o` 
            || frase[i] === `u`) {
                console.log(frase.charAt(i));
            }   
            
        }  
        
            for(let i = 0; i < frase.length; i++){  
            if(frase[i] !== `a` && frase[i] !== `e` && frase[i] !== `i` && frase[i] !== `o` 
            && frase[i] !== `u`) {
                console.log(frase.charAt(i));
            }   
        }  
    }

    vogaisEConsoantes('javascriptloops');

     // Primeiro caracter da string 
    function getLetter(firstCharacter) {
        let letter;
        
       switch(firstCharacter[0]){
           case "a": case "e": case "i": case "o": case "u":
           letter = 'A';
           break;
           case "b": case "c": case "d": case"f": case "g":
           letter = 'B';
           break;
           case "h": case "j": case "k": case "l": case "m":
           letter = 'C';
           break;
           case "n": case "p": case "q": case "r": case "s": case "t": 
           case "v": case "w": case "x": case "y": case "z":
           letter = 'D';
           break;
       }
        return letter;
    }
    console.log(getLetter('adfst'));