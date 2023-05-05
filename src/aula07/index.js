// const array = ['emson',true,'alcool']

// const names = array.filter(
//     function(dado){
//         if(typeof(dado) === 'string'){
//             return dado
//         }
//     }
// )
// matriz = array dentro de array
// const numeros = [
//     [
//         [8,5,9]
//     ],
//     [10,20,30],
//     [100,200,300]
// ]

// console.log(numeros[0][0][1]);

// const array = [3,1,5,8,9,7,4]
// //foreach() pecorre o array
// array.forEach(
//     i => {
//         if(i % 2 ===0){
//             console.log(i)
//         }
//     }
// )

//maps = pecorre o array e retorna o tamanho
const array = [3,1,5,8,9,7,4]

const newArray= array.map(
    i => i %2 === 0
)
console.log(array);
console.log(newArray);