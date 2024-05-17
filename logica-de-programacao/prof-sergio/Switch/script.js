// let num = parseInt(prompt("Digite um número de 0-9"))

// switch(num) {
//     case 0:
//     alert("ZERO")
//     break
//     case 1:
//     alert("UM")
//     break
//     case 2:
//     alert("DOIS")
//     break
//     case 3:
//     alert("TRÊS")
//     break
//     case 4:
//     alert("QUATRO")
//     break
//     case 5:
//     alert("CINCO")
//     break
//     case 6:
//     alert("SEIS")
//     break
//     case 7:
//     alert("SETE")
//     break
//     case 8:
//     alert("OITO")
//     break
//     case 9:
//     alert("NOVE")
//     break
//     default:
//     alert("Digitou errado leia direito po")
// }

let num1 = parseInt(prompt("Digite um número"));
let num2 = parseInt(prompt("Digite outro número"));
let menu = prompt(`Qual operação você deseja fazer:  
(a) Adição 
(b) Subtração 
(c) Divisão 
(d) Multiplicação`);

let resultado = "";

switch (menu) {
  case "a":
    resultado = num1 + num2;
    alert(`Resultado de ${num1} + ${num2} = ${resultado}`);
    break;

  case "b":
    resultado = num1 - num2;
    alert(`Resultado de ${num1} - ${num2} = ${resultado}`);
    break;

  case "c":
    resultado = num1 / num2;
    alert(`Resultado de ${num1} ÷ ${num2} = ${resultado}`);
    break;

  case "d":
    resultado = num1 * num2;
    alert(`Resultado de ${num1} x ${num2} = ${resultado}`);
    break;

  default:
    alert("Digite corretamente");
}
