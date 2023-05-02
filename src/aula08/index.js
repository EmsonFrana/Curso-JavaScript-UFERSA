// function mostra(name){
//     return `Olá, ${name}`
// }


// const name = mostra('emson')

// document.write(name)

// function soma(a,b){
//     return a+b
// }
// const x = parseInt(prompt("Didite um número: "))
// const y = parseInt(prompt("Didite um número: "))
// const resultado = soma(x,y)

// document.write(`A soma de ${x} + ${y} = ${resultado}`)

// na função abaixo só será executada quando chegar nela(função anonima)
// const soma = function(a,b) {
//     document.write(a + b)
// }

// soma(10,45)
// acessando o tag button no html
// let botao = document.querySelector('#id')

// botao.addEventListener('click', function(){
//     alert("la ele")
// })
// arrow function
// const soma = (a,b)=>{
//     return a +b

// document.write(soma)}

// const meuArray = ['one','two','three','four']
// const aluno =[
//     {
//         name: 'emson',
//         old: 24,
//         id:2019011368,
//         celular: {
//             marca: 'LG',
//             memoria: '32g'
//         },
//         computator: {
//             marca: 'positivo',
//             memoria: '256gb',
//             ram: '4g'
//         }
//     },
//     {
//         name: 'Gerliano',
//         idade: 27,
//         celular: {
//             marca:'Xiaomi',
//             memoria: '128gb',
//         }
//     }
// ]
// console.log(`${aluno[0].celular.marca}`)
// console.log(`Aluno1 ${aluno[0].celular.marca}`);
// console.log(`Aluno2 ${aluno[1].celular.memoria}`);

const pessoa = {
    name: 'emson',
    idade:24
}

const chave = Object.values(pessoa)
console.log(chave);