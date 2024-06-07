
// EX 01
// function Soma(array, index1, index2) {
//     return array[index1] + array[index2];
// }

// const numeros = [10, 20, 30, 40, 50];

// const resultado = Soma(numeros, 0, 1, 2);
// console.log(resultado); 
  

// function Somar(num1, num2) {
//     return num1 + num2
// }
// console.log(Somar(10,15));

// EX 2
// let dennis = ["Dennis", "Manuella", "Gabriella", "Beatriz"]

// function maiorString(array) {
//     let maior = ""
//     array.forEach(element => {
//             if(element.length > maior.length) {
//                 maior = element;
//             }
//     });
//     return maior
// }
// console.log(maiorString(dennis));

// EX 3
// let objeto = {
//     nome: "Dennis",
//     idade: "Indefinida",
//     profissao: "Professor?",
//     catolico: true
// }

// function exibirChaves(obj){
//     return Object.keys(obj)
// }

// console.log(exibirChaves(objeto));

//EX 4
// let valorBooleano = true

// function valorString(item) {
//     if(item == true) {
//         return "Verdadeiro"
//     } else {
//         return "False"
//     }
// }
// console.log(valorString(valorBooleano));

// EX 5
function diaDaSemana(data) {
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const date = new Date(data);
    const dia = date.getDay();
    return dias[dia];
}
  
const data = '2022-10-14';
const dia = diaDaSemana(data);
console.log(dia); 
  