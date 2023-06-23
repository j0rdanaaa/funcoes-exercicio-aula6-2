//a)

function somaDoisNumeros (num1, num2) {
   const soma = num1 + num2
   const frase = `Ò resutado de ${num1} + ${num2} é: ${soma}`
    return frase
}

function subtraiDoisNumeros (num1, num2) {
    const subtrai = num1 - num2
    const frase = `O resultado de ${num1} - ${num2} é: ${subtrai}`
    return frase
}

function multiplicaDoisNumeros (num1, num2) {
    const multiplica = num1 * num2
    const frase = `O resultado de ${num1} * ${num2} é: ${multiplica}`
    return frase
}

function divideDoisNumeros (num1, num2) {
    const divide = num1 / num2
    const frase = `O resultado de ${num1} / ${num2} é: ${divide}`
    return frase
}


//b)

const numeroSolicitado1 = Number(prompt(`Informe o primeiro número`))
const numeroSolicitado2 = Number(prompt(`informe o segundo número`))

//c)
const opSoma = somaDoisNumeros(numeroSolicitado1, numeroSolicitado2)
const opSubtrai = subtraiDoisNumeros(numeroSolicitado1, numeroSolicitado2)
const opMultiplica = multiplicaDoisNumeros(numeroSolicitado1, numeroSolicitado2)
const opDivide = divideDoisNumeros(numeroSolicitado1, numeroSolicitado2)


//d)

console.log(opSoma)
console.log(opSubtrai)
console.log(opMultiplica)
console.log(opDivide)


