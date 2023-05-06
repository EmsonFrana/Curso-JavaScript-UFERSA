// 14. Crie um programa que peça ao usuário para digitar o nome, idade, número de celular e cidade onde mora. Em seguida, crie um objeto com essas informações E PERGUNTE se ele quer alterar AS INFORMAÇÕES, caso ele queira, imprima o que ele já digitou e peça para ele alterar, depois imprima o objeto antes e depois no console.
const user = {
    nome: prompt("Informe o seu nome: "),
    idade: prompt("Informe a sua idade: "),
    celular: prompt("Informe o seu número de celular: "),
    cidade: prompt("Informe o município que você reside: "),
  };
  
  if (confirm("Deseja alterar alguma informação?")) {
    console.log("Informações atuais: ", user);
    const opcoes = ["nome", "idade", "celular", "cidade"];
    const escolha = prompt(`Qual informação você deseja alterar? (${opcoes.join(", ")})`);
    if (opcoes.includes(escolha)) {
      user[escolha] = prompt(`Digite o novo ${escolha}: `);
      console.log("Novas informações: ", user);
    } else {
      console.log("Opção inválida.");
    }
  } else {
    console.log("Informações do usuário: ", user);
  }