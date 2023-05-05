// 3. Crie um programa que peça ao usuário para digitar uma frase e, em seguida, conte quantas vezes a letra "a" aparece na frase. Imprima o resultado no console.

const frase = prompt('Digite uma frase:')

let cont = 0

for(let i = 0; i < frase.length; i++){
    if(frase[i] === 'a' || frase[i] ==='A'){
        cont++
    }
}

console.log(`A letra 'a' apareceu ${cont}`);