// var pessoa = {
//     nome: "Fernanda",
//     idade: 19,
//     cpf: 111111,
//     email: "fernandaguimaraes0202@gmail.com",
//     hobbies: ["ter uma casa", "ter uma casa", "ter uma casa"],
//     saudacao: function() {
//          return (`Olá, ${this.nome}, seja bem vindo(a)`);
//     }
// }

// console.log(pessoa.saudacao());


var Client = {
    nome: "Ramon",
    idade: null,
    funcao: "Professor",
    sexo: "masculino",
    carreiras: [
        {
            nome: "Professor",
            empresa: "SENAI",
            descricao: "Professor back-end",
            ano: 2024
        },
        {
            nome: "Programa-dor",
            descricao: null,
            empresa: null,
            ano: 2023
        },
    ],
    serasa: false,
    resposta: function() {
       if(this.serasa == true) {
        return (`O Cliente ${this.funcao} ${this.nome}, não poderá financiar`)
       } else {
        return (`O Cliente ${this.funcao} ${this.nome}, poderá financiar`)
       }
    }
}
