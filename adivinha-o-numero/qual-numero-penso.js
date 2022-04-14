

//let thinkingOfNumber = (Math.random()*100).toFixed(0);

function mostrarNumeros() {
  numeros = [];  
    for(let i= 1; i < 101; i++) {
        numeros.push(i);
    }  

    return numeros;
    
}


let numeros1a100 = document.querySelector('.numeros1a100')
.innerHTML = `<p class ="numeros1a100">${mostrarNumeros().join('')}</p>`;

