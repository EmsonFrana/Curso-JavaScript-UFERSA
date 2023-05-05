// 1. Crie um programa que peça ao usuário para digitar um número inteiro e, em seguida, verifique se o número é par ou ímpar. Imprima o resultado no console.

const numero = parseInt(prompt('Digite um número:'))
if(numero %2 === 0){
    console.log(`O número ${numero} é par!`);
}else{
    console.log(`O número ${numero} é ímpar!`);
}