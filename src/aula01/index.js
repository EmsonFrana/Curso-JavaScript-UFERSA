// console.log("Hello, Wolrd!")

// console.log('Hello, Wolrd!')

// console.log(`Hello, Wolrd!`)

// console.log(216);

// alert("perigo")

var variavelVar = 100
//variavel var é uma global
//variavelVar e a variavelLet não precisa ser inicializada(todos podem acessar)
let variavelLet =10
//a variavel let é privada(apenas a classe pode acessar)
//as variaverCost precisa ser inicializada com  um valor
const variavelConst = 0;

{
    var variavelVar = 100
    console.log(variavelVar);
}
console.log(variavelVar);
//nesse exemplo a variavel do tipo var vai ser atualizada com o segundo valor atribuido

const nomeConst = "texto 01";

{
    const nomeConst = "texto 02"
    console.log(nomeConst);
}
console.log(nomeConst);


let var1 = undefined
let var2 

//boolean
let var3 = true
let var4 = false 

//string
let var5 = "texto 1"
let var6 = 'texto 2'
let var7 = `texto 3`

//number
let var8 = 10
let var9 = 10.10

console.log('O tipo da variavel '+var5+' eh '+ typeof(var5))
console.log(`O tipo da variavel ${var8} eh ${typeof(var8)}`)

//entrada de dados
let texto = prompt("imput your name")
console.log(texto);
