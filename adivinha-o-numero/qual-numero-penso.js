let numeros1a100 = document.querySelector('.numeros1a100');
let guessStart = document.querySelector('.guessStart');
let buttonYes = document.querySelector('.buttonyes');
//let thinkingOfNumber = (Math.random()*100).toFixed(0);


  
let numeros = []

function mostrarNumeros() {
  
    for(let i= 1; i < 101; i++) {
      numeros.push(i)
      let estruturaDiv = document.createElement('div'); 
      estruturaDiv.innerHTML = `<div class="divnumeros">${i}</div>`;
      numeros1a100.append(estruturaDiv);
    }        
}

mostrarNumeros();


let meio = guessStart.addEventListener('click', function() {
    let quick = (numeros.length) / 2
    console.log(quick)
    let try1 = document.querySelector('.try1');         
    setTimeout(() => { try1.innerHTML = `<p class="try1">'Seu número pensado foi' ${quick}'?'</p>`}, 1000);
  });



//let numeros1a100 = document.querySelector('.numeros1a100')
//.innerHTML = mostrarNumeros().join(' - ');

 