// 11. Crie um programa que peça ao usuário para digitar uma lista de números separados por vírgula. Em seguida, crie uma função que encontre o segundo maior número da lista e o imprima no console.
const lista = prompt('Digite uma lista de número separado por vírgula ')
const Array = lista.split(",").map(Number)

for (let index = 0; index < Array.length; index++) {
    Array[index] = parseInt(Array[index])
}

function segundoMaior(Array){
    Array.sort(function(a,b){

        return b - a
    });

    return Array[1]
}

console.log(`Temos que o segundo maior elemento é ${segundoMaior(Array)}.`);