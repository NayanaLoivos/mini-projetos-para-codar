

let thinkingOfNumber = (Math.random()*100).toFixed(0);

let numeros1a100 = document.querySelector('.numeros1a100')
function mostrarNumeros() {
  
    for(let i= 1; i < 101; i++) {
      let estruturaDiv = document.createElement('div'); 
      estruturaDiv.innerHTML = `<div class="divnumeros">${i}</div>`;
      numeros1a100.append(estruturaDiv);
    }     
}

mostrarNumeros()




//let numeros1a100 = document.querySelector('.numeros1a100')
//.innerHTML = mostrarNumeros().join(' - ');

 