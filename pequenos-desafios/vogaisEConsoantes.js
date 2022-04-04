
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