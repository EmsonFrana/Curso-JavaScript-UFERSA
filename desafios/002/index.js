// 2. Crie um programa que peça ao usuário para digitar dois números e, em seguida, calcule a soma, subtração, multiplicação e divisão desses números. Imprima os resultados no console.

const a = parseFloat(prompt('Digite o primeiro número:'))
const b = parseFloat(prompt('Digite o segundo número:'))

function soma(a,b) {
    return a+b
}
function subtrair(a,b) {
    return a+b
}
function multiplica(a,b) {
    return a+b
}
function dividi(a,b) {
    return a/b
}

console.log(`A soma de ${a} + ${b} = ${soma(a,b)}`);
console.log(`a subitração de ${a} - ${b} = ${subtrair(a,b)}`);
console.log(`A divisão de ${a} / ${b} = ${dividi(a,b)}`);
console.log(`A multiplicação de ${a} * ${b} = ${multiplica(a,b)}`);