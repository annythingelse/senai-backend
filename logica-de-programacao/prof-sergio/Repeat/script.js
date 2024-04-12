// variavel ++ (incremento) => +1
// variavel -- (decremento) => -1
// variavel + = 2 (incrimento) => +2


//  -----> exemplo 1 
//  let contador = 0
//  while(contador <= 10) {
//      console.log(contador);
//      contador +=2
//  }

//  ------> exemplo 2
// let nome = "", acumulador = ""
// while(nome !== "pare") {
//     nome = prompt("Digite um nome ou 'pare' para sair")
//     if(nome != "pare") {
//         acumulador += nome + ", "
//     }
// }


// function removerUltimoCaractere(string) {
//     return string.slice(0, -2);
// }

// let novaString = removerUltimoCaractere(acumulador);
// console.log(novaString)

// alert(novaString)


//  ---- exemplo 3
// let notas, nota = 0, media, controle = 0
// notas = parseInt(prompt("quantidade de notas"))

// while(controle < notas) {
//     nota += parseInt(prompt("digite uma nota"))
//     controle ++
    
//  }
// media = nota/notas
// alert(`A média é: ${media.toFixed(2)}`)


//  --------> Usando o for
// let media, nota = 0
// for (let i = 0; i <= 3; i++) {
//     nota += parseInt(prompt("digite as notas"))
//     media = nota/4
// }
// alert(`A média é: ${media.toFixed(1)}`)


// // ----> exemplo 4
// let soma = 0
// for(let i = 10; i<=20; i++) {
//     soma += i
//     console.log(soma);
// }
// alert(`A soma é: ${soma}`)


// ----> exemplo 5
// for(let i = 100; i<=200; i++) {
//     if(i % 2 !== 0 && i % 3 == 0) {
//         console.log(i);
//     }
// }


// ----> exemplo 6

// let number = parseInt(prompt("Qual tabuada?"))
// let result = ""

// for(let i = 1; i <= 10; i++) {
//     result += `${number} x ${i} = ${number * i} \n`
// }
// alert(result)


// ------> exemplo 7
// let numbers, result = 0

// for(let i = 1; i <= 5; i++) {
//     numbers = parseInt(prompt("digite um nº: "))
//     if (numbers > 7) {
//         result += numbers    
//         console.log(result);
//     } 
// }
// alert(result)

// -----> exemplo 8
// let acumulador = ""
// for(let nome = ""; nome != "pare"; nome = prompt("Escreva um nome ou pare para sair") ) {
//     acumulador += nome + ", "
// }

// function removerUltimoCaractere(string) {
//     return string.slice(1, -2);
// }
    
// let novaString = removerUltimoCaractere(acumulador);
// console.log(novaString)
    
// alert(novaString)
