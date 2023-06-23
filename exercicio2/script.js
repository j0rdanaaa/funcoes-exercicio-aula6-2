// a)
/*
function operacao(num1, num2) {
    const soma = num1 + num2
        console.log(`A soma dos dois números é: ${soma}`)
}
operacao(7, 9)
*/
//b)
/*
function operacao(num1, num2){
    const operacao = (num1 >= num2)
    console.log (`O primeiro número é maior que o segundo? ${operacao}`)
}
    
    operacao(70, 85)
*/
//c)
/*
function oNumeroEhPar (valor){
const parOuImpar = valor % 2 === 0
    console.log(`O número é par? ${parOuImpar}`)
}

oNumeroEhPar(3)
*/
//d)

function calcular (salario) {
    const desconto = salario *.1
    const salarioLiquido = salario - desconto
    return salarioLiquido
}
console.log(calcular (1500.00))
console.log(calcular(7000.00))

 