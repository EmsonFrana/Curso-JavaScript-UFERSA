// Crie um programa que peça ao usuário para digitar uma lista de números separados por vírgula. Em seguida, converta essa lista em um array e calcule a média dos números. Imprima o resultado no console.
const lista = parseInt(prompt('Digite número separado por vírgula'))
const array = []
const resultado = 0

for (let i = 0; i < lista.length; i++) {
    if(lista[i]!== ','){
        array.push(parseInt(lista[i]))
    }
}
resultado = array / lista.length
console.log(`${resultado}`);

