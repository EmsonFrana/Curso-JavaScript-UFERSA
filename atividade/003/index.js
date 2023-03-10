const valor = parseInt(prompt('ENTER ONE NUMBER: '))
const number = parseInt(prompt('ENTER ONE NUMBER: '))
const vetor = [9, 0, 8, 1, 7, 190, 12, 87, -10, -200, 14, 1]

console.log(`The number enter is ${valor}, and the your cubo is ${Math.pow(valor,3)}`);

console.log(`The numebr enter is ${number}, and your raiz is ${Math.sqrt(number).toFixed(2)}`);

console.log(`The biggest number is ${Math.max(...vetor)}, and the smallest number is ${Math.min(...vetor)}`);