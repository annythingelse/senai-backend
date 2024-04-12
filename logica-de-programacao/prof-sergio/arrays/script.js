// ----> Principais métodos
// Push = Add um item ao final do array
// Pop = Remove um item do final do array
// Unshift = Add um item ao início do array
// Shift = Remove um item do início do array
// IndexOf = Procura o índice de um item no array
// Sort = Ordena os elementos do array como texto e retorna o array
// Length = Exibe o tamanho/comprimento do array

// -----> Exibindo os items do array de forma separada
// for (let i = 0; i < nome.length; i++) {
//     const element = nome[i];
//     console.log(element);
// }

// ------> Exibindo de trás pra frente
// for (let i = nome.length - 1 ; i >= 0; i--) {s
//     const element = nome[i];
//     console.log(element);
// }

// --------> ex 1
// let arrayProdutos = [];
// let arrayPreco = [];

// for (let i = 0; i < 5; i++) {
//   arrayProdutos[i] = prompt("Digite o nome de um produto");
//   arrayPreco[i] = Number(prompt("Digite o preço"));
// }
// console.log(arrayProdutos, arrayPreco);

// let qntProdutosMenosde50 = 0;
// let qntMaior100 = 0;
// let mediaMaior100 = 0;
// let soma = 0;
// let produtosEntre50e100 = "";

// for (let i = 0; i < arrayPreco.length; i++) {
//   const element = arrayPreco[i];
//   if (element < 50) {
//     qntProdutosMenosde50++;
//   }
//   if (element > 50 && element < 100) {
//     produtosEntre50e100 += arrayProdutos[i] + " ";
//   }
//   if (element > 100) {
//     soma += element;
//     qntMaior100++;
//   }
//   mediaMaior100 = soma / qntMaior100;
// }
// console.log(
//   `Quantidade de produtos com preço menores que 50: ${qntProdutosMenosde50} \nProdutos com o preço entre 50 e 100: ${produtosEntre50e100} \nMédia dos produtos com preço maior que 100: ${mediaMaior100}`
// );

// ----------> ex 2
let nomes = [];
let opcao = -5;
while (opcao != "f") {
  opcao = prompt(`Qual operação você deseja fazer:  
    (a) Cadastrar nome
    (b) Excluir um nome
    (c) Editar um nome
    (d) Pesquisar se um nome está cadastrado
    (e) Listar todos os nomes cadastrados em ordem alfabética
    (f) Sair do programa`);

  switch (opcao) {
    case "a":
      let caseA = prompt("Digite o nome que você deseja cadastrar");
      nomes.push(caseA);
      alert(nomes);
      break;

    case "b":
      nomes.pop();
      alert(nomes);
      break;

    case "c":
      let caseC = Number(prompt("Digite o índice do nome que deseja alterar"));
      let caseCUpdate = prompt("Atualize o nome");
      nomes[caseC] = caseCUpdate;
      alert(nomes);
      break;

    case "d":
      alert(nomes.includes(prompt("Pesquisar nome")));
      break;

    case "e":
      nomes.sort();
      alert(nomes);
      break;

    case "f":
      alert("tchau obrigado");
      break;

    default:
      alert("você saiu do programa");
  }
}
