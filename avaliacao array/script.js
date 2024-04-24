// 1) Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente pode
// montar seu sorvete com até 3 bolas (sabores).
// Criar um programa que simule esse sistema:
// 1- Adicionar sabor
// 2- Remover sabor
// 3- Visualizar sorvete
// 4- Finalizar pedido

// == MENSAGENS e VALIDAÇÕES ==
// 1 -&gt; Sabor adicionado! OU Limite de sabores atingido, remova um sabor!
// 2 -&gt; Sabor removido! OU Não existem sabores adicionados!
// 3 -&gt; Camada 1 - Sabor X, Camada 2 - Sabor Y, etc. OU Seu sorvete não possui
// sabores!
// 4 -&gt; Pedido realizado! OU Adicione pelo menos um sabor!

// ---------------> Resolução:
// let sabores = [];
// let opcao = -4;
// while (opcao != "4") {
//   opcao = prompt(`O que deseja Fazer?
//     (1) Adicionar sabor
//     (2) Remover sabor
//     (3) Visualizar sorvete
//     (4) Finalizar pedido
//    `);

//   switch (opcao) {
//     case "1":
//       let sabor = prompt("Digite o sabor que deseja");
//       sabores.push(sabor);

//       if(sabores.length > 3) {
//         let excluirSabor = prompt(`Limite de sabores atingido, remova um sabor: ${sabores}`)
//         let index = sabores.findIndex(obj => obj == excluirSabor )
//         sabores.splice(index, 1)
//         alert(`O sabor ${excluirSabor} foi removido! `)
//        } else {
//         alert(`Sabor adicionado: ${sabores}`)
//        }
//       break;

//     case "2":
//         if(sabores.length !== 0) {
//             let excluirSabor = prompt(`Qual sabor deseja remover? ${sabores}`)
//            let index = sabores.findIndex(obj => obj == excluirSabor )
//            sabores.splice(index, 1)
//            alert(`O sabor ${excluirSabor} foi removido! `)
//         }
//         else{
//             alert("Não existem sabores adicionados")
//         }
//       break;

//     case "3":
//         if(sabores.length == 1) {
//             alert(`Seu sorvete ficou assim:
//             Camada única: ${sabores[0]}`)
//         } else if(sabores.length == 2) {
//             alert(`Seu sorvete ficou assim:
//             Camada 1: ${sabores[0]}
//             Camada 2: ${sabores[1]}`)
//         } else if(sabores.length == 3) {
//             alert(`Seu sorvete ficou assim:
//             Camada 1: ${sabores[0]}
//             Camada 2: ${sabores[1]}
//             Camada 3: ${sabores[2]}`)
//         } else if(sabores.length == 0) {
//             alert("Seu sorvete não possui sabores!")
//         }
//         break

//     case "4":
//     if(sabores.length > 0) {
//         alert("Seu pedido foi finalizado");
//     } else {
//         alert("Adicione pelo menos um sabor");
//     }
//       break;
//   }
// }

// 2) Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba-
// o.
// Modifique os elementos do array de modo que a sequência de números fique do contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1

// ---------------> Resolução:
// let arrayNumbers = [];
// for (let i = 0; i < 3; i++) {
//   arrayNumbers.push(parseInt(prompt("Digite um número")));
// }
// alert(
//   `A sequência contrário do array: ${arrayNumbers} = ${arrayNumbers.reverse()}`
// );

// Maneira legal de fazer
let nums = [];
let reverso = "";
for (let i = 0; i < 3; i++) {
  nums.push(Number(prompt("Digite um número")));
}
for (let j = nums.length - 1; j >= 0; j--) {
  reverso += nums[j] + " ";
}
alert(reverso);

// 3) Calcular a soma dos números de um array
// ---------------> Resolução:
// let numbers = [15, 24, 37, 45, 102, 9];
// let soma = 0;
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   soma += element;
// }
// alert(`A soma do array: ${numbers} = ${soma}`);

// 4) Peça ao usuário para digitar os nomes de 5 alunos e suas notas na prova de
// Matemática. Calcular a média de todas as notas acima de 5,0.
// ---------------> Resolução:
// let nomesAlunos = [];
// let notasAlunos = [];
// for (let i = 0; i < 5; i++) {
//   let nome = prompt("Digite o nome do aluno:");
//   nomesAlunos.push(nome);

//   let nota = parseFloat(prompt("Digite a nota:"));
//   notasAlunos.push(nota);
// }
// let somaNotas = 0;
// let contador = 0;
// for (let i = 0; i < notasAlunos.length; i++) {
//   if (notasAlunos[i] > 5) {
//     somaNotas += notasAlunos[i];
//     contador++;
//   }
// }
// let media = 0;
// if (contador > 0) {
//   media = somaNotas / contador;
// }
// alert(`A média das notas acima de 5 é: "  ${media.toFixed(2)}`);

// 5) Localizar o maior valor dentro de um array de números
// ---------------> Resolução:
// function encontrarMaior(array) {
//   if (array.length === 0) {
//     return "O array está vazio.";
//   }
//   let maior = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > maior) {
//       maior = array[i];
//     }
//   }
//   return "O maior valor no array é: " + maior;
// }
// const numeros = [10, 5, 8, 15, 30];
// alert(encontrarMaior(numeros));

// 6) Crie 2 Arrays, no primeiro você pedirá para o usuário digitar 10 números.
// Faça um código para copiar para o segundo Array, apenas os números ímpares existentes
// no primeiro Array.
// ---------------> Resolução:
// let primeiroArray = [];
// for (let i = 0; i < 10; i++) {
//   let numero = parseInt(prompt("Digite o " + (i + 1) + "º número:"));
//   primeiroArray.push(numero);
// }
// let segundoArray = [];
// for (let i = 0; i < primeiroArray.length; i++) {
//   if (primeiroArray[i] % 2 !== 0) {
//     segundoArray.push(primeiroArray[i]);
//   }
// }
// alert(`Números ímpares no segundo Array: ${segundoArray}`);
