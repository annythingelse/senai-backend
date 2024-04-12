// --------> ex 1) Calcule a soma dos números de 1 a 100.
// let soma = 0
// let result = ""
// for (let i = 1; i <= 100; i++) {
//    soma += i
//    result = `A soma de ${i} é igual a = ${soma} \n`
// }
// alert(result)

// ---------> ex 2) Imprima a tabuada do 5.
// let number = 5
// let result = ""

// for(let i = 1; i <= 10; i++) {
//     result += `${number} x ${i} = ${number * i} \n`
// }
// alert(result)

// -------> ex 3) Altere o programa anterior para fornecer a tabuada do número que o usuário pedir
// let number = parseInt(prompt("Qual o número da tabuada?"))
// let result = ""

// for(let i = 1; i <= 10; i++) {
//     result += `${number} x ${i} = ${number * i} \n`
// }
// alert(result)

// -------> ex 4) Imprima os números de 10 a 1 em ordem decrescente.
// let decrescente = ""
// for(let d = 10; d >= 1; d--) {
//    decrescente += `${d}  `
// }
// alert(`Números decrescentes = ${decrescente}`)

// ------> ex 5) Imprima os números ímpares de 1 a 20.
// result = ""
// for(let i = 1; i <= 20; i++) {
//     if( i % 2 != 0) {
//        result += `${i}\n`
//     }
// }
// alert(`os números ímpares de 1 a 20 são: \n${result}`)

// --------> ex 6) Faça um programa que calcule o quadrado de cada número de 1 a 10.
// let results = ""
// for(let i = 1; i <= 10; i++) {
//     results += `O quadrado de ${i} = ${i ** 2}\n`
// }
// alert(results)

// --------> ex 7) Imprima os números de 1 a 10 em ordem crescente, depois imprima-os em ordem decrescente.
// let crescente = ""
// let decrescente = ""

// for(let c = 1; c <= 10; c++) {
//    crescente += `${c}, `
// }
// for(let d = 10; d >= 1; d--) {
//    decrescente += `${d}, `
// }

// function removerUltimoCaractere(string) {
//     return string.slice(0, -2,) ;
// }

// let numberC = removerUltimoCaractere(crescente)
// let numberD = removerUltimoCaractere(decrescente);

// alert(`Número crescente = {${numberC}} \nNúmero decrescente = {${numberD}}`)

// --------> Maneira bacana de fazer
// let number = parseInt(prompt("Digite um número"))

// function criarStringNumerica(inicio, number, passo) {
//     let result = "";
//     for (let i = inicio; i !== number; i += passo) {
//         result += `${i}, `;
//     }
//     result += number;
//     return result;
// }

// let crescente = criarStringNumerica(1, number, 1);
// let decrescente = criarStringNumerica(number, 1, -1);

// alert(`Número crescente = ${crescente}\nNúmero decrescente = ${decrescente}`);

// ---------> ex 8) Calcule o fatorial de um número dado.

// let number = parseInt(prompt("Digite um número"))
// let resultado = 1

// for (let i = 1; i <= number; i++) {
//     resultado *= i;
//     console.log(i, resultado);
// }
// alert(resultado)

// ------> ex9) Imprima os números de 1 a 100, substituindo os múltiplos de 3 por "Fizz", os múltiplos de 5 por "Buzz" e os múltiplos de ambos por "FizzBuzz".

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// ----> ex10) Faça um programa que calcule o valor da série: 1 + 1/2 + 1/3 + ... + 1/10.
// let soma = 0;
// let result = "";
// for (let i = 1; i <= 10; i++) {
//   soma += 1 / i;
//   if (i == 10) {
//     result += `1 / ${i} = ${soma.toFixed(2)}`;
//   } else {
//     result += `1 / ${i} = ${soma.toFixed(2)} + `;
//   }
// }
// alert(`Resultado de: \n${result}`);

// ---------> ex11) Conte quantos números pares e ímpares existem de 1 a 100.
// let impar = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     impar++;
//   }
// }
// alert(`numeros ímpares: ${impar}`);

// ---------> ex12) Dada uma lista de números, encontre o maior e o menor valor.
// let array = [1, 2, 3, 4, 5];
// let maior = array[0];

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];

//   if (element > maior) {
//     maior = element;
//   }
// }
// console.log(maior);
