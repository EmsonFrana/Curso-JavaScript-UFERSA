// 7. Crie um programa que peça ao usuário para digitar o nome, idade e cidade onde mora. Em seguida, crie um objeto com essas informações e imprima o objeto no console.
let nome = prompt("Informe seu nome completo: ");
let idade = prompt("Informe sua idade: ");
let cidade = prompt("Informe a cidade em que reside: ");
let pessoa = {
  nome: nome,
  idade: idade,
  cidade: cidade,
};
console.log(pessoa);