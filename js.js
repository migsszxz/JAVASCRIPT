let numero1 = Number(prompt("Digite o primeiro número: "))
let numero2 = Number(prompt("Digite o segundo número: "))
let operacao = prompt("Informe a operação: \n[+]\n[-]\n[*]")


if(operacao == "+") {
    alert(numero1 + numero2)
} else if(operacao == "-") {
    alert(numero1 - numero2)
} else if(operacao == "*") {
    alert(numero1 * numero2)
}