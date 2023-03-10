const nome = prompt("ENTER YOUR NAME: ")
const anoNacimento = parseInt(prompt("ENTER YEAR OF BIRTH: "))
const salarioMensal = parseFloat(prompt("ENTER YOUR MONTHLY SALARY: "))
const quantidadeFilho = parseInt(prompt('ENTER YOUR CHILD QUANTITY: '))

const idade = 2023-anoNacimento
const salarioAposentado = (70 -idade ) * (salarioMensal*12)


console.log(`Olá, ${nome}, tudo bem?
Você tem ${idade} anos de idade, seu salário é R$ ${salarioMensal} e receberá R$ ${salarioAposentado.toFixed(2)} até se aposentar.
Caso você deseje dividir seu salário entre os seus filhos, dará R$ ${(salarioMensal/quantidadeFilho).toFixed(2)} para cada um.
`);