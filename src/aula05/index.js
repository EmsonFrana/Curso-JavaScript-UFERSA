// switch(){case:false break;}
// const key = parseInt(prompt('Digite um numero: '))
// switch (key) {
//     case 1:
//         console.log(`vc digitou ${key}`);
//         break;
//     case 2:
//         console.log(`vc digitou ${key}`);
//         break;
//     case 3:
//         console.log(`vc digitou ${key}`);
//         break;
//     default:
//         break;
// }
//Laços de reptiçõs
//----- for / while / do while -----
let condition = 0
console.log('a baixo é o laço WHILE');
while (condition < 10) {
    console.log(condition+1);
    if(condition === 2) return;
    condition++
}
console.log('a baixo é o laço FOR');
for(condition = 0 ; condition < 10 ; condition++){
    console.log(condition+1);
}
let aux = 0
condition = 50
console.log('a baixo é o laço FOR');
do {
    console.log(condition);
    aux++
    condition--
} while (condition < 10);