
const vetor = prompt('Informe a lista de números separados por virgulas:')

const lista = []
for(let i = 0 ; i  < vetor.length; i++){
    if(vetor[i] !== ","){
        lista.push(parseInt(vetor[i]))
    }
}


let soma = 0
const impar = []
const par = []

for(let j = 0 ; j < lista.length;j++){
    if(lista[j] > 3 && lista[j] <= 9){
        soma += lista[j]
    }

    if(lista[j] % 2 === 0){
        par.push(lista[j])
        console.log("par "+par[j]);
    }
    else{
        impar.push(lista[j])
        console.log("Impar : "+impar[j]);
    }
}
console.log(soma);
