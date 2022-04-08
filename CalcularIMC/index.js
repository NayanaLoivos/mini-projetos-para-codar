let calculaPeso = document.getElementById("calculapeso");

function calcularPeso() {

    let nome = document.getElementById("nome").value;
    let sexoMasculino = document.getElementById("masculino").checked;
    let sexoFeminino = document.getElementById("feminino").checked;
    let altura = document.getElementById("altura").value;
    let resultadoIMC = document.getElementById("resultadoIMC");
    
    let limparcampo = document.getElementById("limparcampos");

    nome.value;
    sexoMasculino.checked;
    sexoFeminino.checked;
    Number(altura.value);

    if(nome =='' || sexoMasculino == false && sexoFeminino == false) {
        alert('Por favor, informe um nome e selecione um sexo ...');
        nome.focus();
        return;
    }
    if(altura == 0 || isNaN(altura)){
        alert('Por favor, informe a altura corretamente ...');
        altura.focus();
        return;
    }
    let peso;    
    if(sexoMasculino == true) {
        peso = 22 * Math.pow(altura, 2);
    } else {
        peso = 21 * Math.pow(altura, 2);
    }

    resultadoIMC.innerHTML = nome + ': Seu peso ideal é' + peso.toFixed(3) + 'kg.';   
}


calculaPeso.addEventListener('click', calcularPeso);