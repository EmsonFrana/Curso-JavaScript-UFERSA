// 1 . PEÇA PARA O USUÁRIO DIGITAR SUA DATA DE NASCIMENTO, VERIFIQUE SE ELE É DE MAIOR E INFORME SE É OU NÃO;
const dataNacinimento = parseInt(prompt('Infome ano de nascimento de nacimento: '))
const anoAtual = parseInt(prompt('Qual o ano atual'))
const idade = anoAtual - dataNacinimento 

if(idade >= 0 && idade  < 18 ) {
    console.log(`Você tem ${idade} de idade, menor de idade!`);
}
else if(idade >= 18) {
    console.log(`Você tem ${idade} de idade, maior de idade!`);
}
else{
    console.log('ERRO');
}

//2. PEÇA PARA O USUÁRIO DIGITAR UM NÚMERO DE  1 A 7, E DIGA QUAL DIA DA SEMANA ELE SELECIONOU, CASO SEJA UM NÚMERO INVÁLIDO, INFORME-O O ERRO: CONSIDERE O DOMINGO COMO 1;

const numero = parseInt(prompt(`Infoeme um número de 1 à 7`))
if(numero <= 0 || numero > 7 ){
    console.log(`Número inválido`)
}
else{
        switch (numero) {
        case 1:
            console.log(`Segunda-Feira!`)
            break;
        case 2:
            console.log(`Terça-Feira!`)
            break;
        case 3:
            console.log(`Quarta-Feira!`)
            break;
        case 4:
            console.log(`Quinta-Feira!`)
            break;
        case 5:
            console.log(`Sexta-Feira!`)
            break;
        case 6:
            console.log(`Sabádo!`)
            break;
        case 7:
            console.log(`Dmingo!`)
            break;

        default:
            break;
    }
}


//3. PEÇA PARA O USUÁRIO DIGITAR UM MÊS (1 A 12) E UM DIA (1 A 31), VERIFIQUE SE AMBOS SÃO IGUAIS A DATA DA AULA (07/03), CASO NÃO SEJAM IGUAIS, RETORNE UM ERRO PARA O USUÁRIO;

const mes = parseInt(prompt(`Digite um número de 01 á 12 para os meses:`))
const dia = parseInt(prompt(`Digite um número de 01 à 31 para os dias dos meses`))
if(dia <= 0 || mes <= 0){
    console.log('Dia ou mes invalido')
}
else if(mes === 03 && dia === 07){
    console.log(`Wow, a data infomada é o dia da aula`)
}
else console.log('ERRO')

//4. PEÇA PARA O USUÁRIO DIGITAR UM MÊS (1 A 12) E UM DIA (1 A 31), VERIFIQUE SE UM DOS DOIS É IGUAL A DATA DA AULA (07/03), CASO NENHUM SEJA IGUAL, RETORNE UM ERRO PARA O USUÁRIO;
const mes1 = parseInt(prompt(`Digite um número de 01 á 12 para os meses:`))
const dia1 = parseInt(prompt(`Digite um número de 01 à 31 para os dias dos meses`))
if(dia1 <= 0 || mes1 <= 0){
    console.log('Dia ou mes invalido')
}
else if(mes1 === 03 || dia1 === 07){
    console.log(`Wow, a data infomada é o dia da aula`)
}
else console.log('ERRO')
