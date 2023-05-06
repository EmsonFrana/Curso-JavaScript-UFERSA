// 13. Crie um programa que peça ao usuário para digitar uma lista de nomes separados por vírgula. Em seguida, crie uma função que ordene os nomes por ordem alfabética e imprima a lista ordenada no console.
const lista = prompt("Informe uma lista de nomes, em que todos sejam separados por vírgulas: ");
const nomes = lista.split(",");
function ordenarNomes(nomes) {
  nomes.sort(function (a, b) {
    return a.localeCompare(b);
  });
  return nomes;
}
console.log("Os nomes informados em ordem alfabética são: " + ordenarNomes(nomes));