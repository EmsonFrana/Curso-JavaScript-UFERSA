// 12. Crie um programa que peça ao usuário para digitar um texto e, em seguida, crie uma função que conte quantas vezes cada palavra aparece no texto. Armazene o resultado em um objeto e imprima o objeto no console.
const texto = prompt('Digite uma frase/texto e descubra quantas vezes cada palavra se repete')

function contadorPalavra(texto){
    //desconciderar os simbolos
    texto = texto.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    const quantidade = texto.splint(' ')
    const contador = {}
    for (let index = 0; index < quantidade.length; index++) {
        contador[quantidade[index]] = contador[quantidade[index]] ? contador[quantidade[index]]+ 1 : 1
        //pos os : 1 so contabiliza uma palavra 
    }
    return contador
}
console.log(contadorPalavra(texto));