// verificando inputs
let formsOk = false
console.log(formsOk);

let Nome = document.getElementById("name")
let Email = document.getElementById("email")
let Senha1 = document.getElementById("password")
let Senha2 = document.getElementById("passwordConfirmed")
let Nascimento = document.getElementById("birthdayDate")

verificandoInputs = function() {
    if(Email.value == "" || Senha1.value=="" || Senha2.value=="" || Nascimento.value=="" || Nome.value=="") {
        alert("Preencha todos os campos")
    } else if (Senha1.value !== Senha2.value) {
        alert("As senhas precisam ser iguais")
    } else {
        formsOk = true
        console.log(formsOk);
    }
    // Configurando o localStorage 
    if(formsOk == true) {
        localStorage.setItem("Email", Email.value);
        localStorage.setItem("Senha", Senha2.value);
        localStorage.setItem("Data de Nascimento", Nascimento.value);
        alert("Dados Enviados com sucesso")
    }
}