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
        alert("obesidade grau III")
    } else if(imc >=35,0 && imc <= 39,9) {
        alert("obesidade grau II")
    } else if(imc >=30,0 && imc <= 34,9) {
        alert("obesidade grau I")
    } else if(imc >=25,0 && imc <= 29,9) {
        alert("sobrepeso")
    } else if(imc >=18,5 && imc <= 24,9) {
        alert("peso adequado")
    } else if(imc <=18,5) {
        alert("baixo peso")
    }
}

function GerarRelatorio(peso, altura) {
    let imc = calcularIMC(peso, altura)
    classificarIMC(imc)
}