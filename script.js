let peso = prompt("Digite seu peso(Kg): ")
let altura = prompt("Digite sua altura(m): ")
GerarRelatorio(peso, altura)


let imc = calcularIMC(peso, altura)
alert(imc)


function calcularIMC(peso, altura){
    return peso / (altura * altura) 
}


function classificarIMC(imc){
    if(imc >= 40) {
        alert("obesidade grau 3: " + imc)
    } else if(imc >=35) {
        alert("obesidade grau 2: " + imc)
    } else if(imc >=30) {
        alert("obesidade grau 1: " + imc)
    } else if(imc >=25) {
        alert("sobrepeso: " + imc)
    } else if(imc >=18,5) {
        alert("peso adequado: " + imc)
    } else {
        alert("baixo peso: " + imc)
    }
}

function GerarRelatorio(peso, altura) {
    let imc = calcularIMC(peso, altura)
    classificarIMC(imc)
}