function calcularPeso() {

    let nome = document.getElementById("nome");
    let sexoMasculino = document.getElementById("masculino");
    let sexoFeminino = document.getElementById("feminino");
    let altura = document.getElementById("altura");
    let resultadoIMC = document.getElementById("resultadoIMC");
    
    let limparcampo = document.getElementById("limparcampos");

    let nomeValue = nome.value;
    let sexoMasculinoValue = sexoMasculino.checked;
    let sexoFemininoValue = sexoFeminino.checked;   
    let alturaValue = altura.value;

    if(nomeValue =='' || sexoMasculino == false && sexoFeminino == false) {
        alert('Por favor, informe um nome e selecione um sexo ...');
        nome.focus();
        return;
    }
    if(alturaValue == 0 || isNaN(alturaValue)){
        alert('Por favor, informe a altura corretamente ...');
        altura.focus();
        return;
    }

    let peso;    
    if(sexoMasculino == true) {
        peso = 22 * Math.pow(alturaValue, 2);
    } else {
        peso = 21 * Math.pow(alturaValue, 2);
    }

    resultadoIMC.innerHTML = nomeValue + ': Seu peso ideal é ' + peso.toFixed(2) + 'kg.';   
}

let calculaPeso = document.getElementById("calculapeso");
calculaPeso.addEventListener('click', calcularPeso);