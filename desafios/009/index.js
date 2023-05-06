// 9. Crie um programa que peça ao usuário para digitar uma lista de números separados por vírgula e, em seguida, ordene os números em ordem crescente e imprima a lista ordenada no console.
const numeros = prompt("Informe uma lista de números, em que todos sejam separados por vírgulas: ");
const numerosArray = numeros.split(",").map(num => parseFloat(num));
numerosArray.sort((a, b) => a - b);
console.log("A lista dos números informados de forma ordenada é:", numerosArray);