// function funcaoNormal(nome) {
//     console.log(`Saudações, ${nome}`);
// }

// let funcaoAnonima = function(nome) {
//     console.log(`Saudações, ${nome}`);
// }

let lista = [30, 15, 50, 11]

let isMult5 = lista.every(function(numero) {
    return numero % 5 == 0
})

console.log(isMult5);

let nomes = ["Maria", "Manuella", "Julia", "Marcelo", "Marcos", "Rodrigo"]

let funcaoDoSergio = nomes.every(function(itens){
    return itens.charAt(0) == "M"
})

if(funcaoDoSergio) {
    console.log("Todos os nomes começam com a letra M");
} else {
    console.log("Nem todos os nomes começam com a letra M");
}