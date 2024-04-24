// verificando inputs
let formsOk = false;
console.log(formsOk);

let Nome = document.getElementById("name");
let Email = document.getElementById("email");
let Senha1 = document.getElementById("password");
let Senha2 = document.getElementById("passwordConfirmed");
let Nascimento = document.getElementById("birthdayDate");
let Button = document.getElementById("sendButton");

function verificarCamposPreenchidos() {
  if (
    Email.value !== "" &&
    Senha1.value !== "" &&
    Senha2.value !== "" &&
    Nascimento.value !== "" &&
    Nome.value !== ""
  ) {
    Button.disabled = false;
  }
}

Email.addEventListener("input", verificarCamposPreenchidos);
Senha1.addEventListener("input", verificarCamposPreenchidos);
Senha2.addEventListener("input", verificarCamposPreenchidos);
Nascimento.addEventListener("input", verificarCamposPreenchidos);
Nome.addEventListener("input", verificarCamposPreenchidos);

verificandoInputs = function () {
  verificarCamposPreenchidos();
  if (Senha1.value !== Senha2.value) {
    alert("As senhas precisam ser iguais");
  } else {
    formsOk = true;
    console.log(formsOk);
  }
  // Configurando o localStorage
  if (formsOk == true) {
    window.location.reload();
    localStorage.setItem("Email", Email.value);
    localStorage.setItem("Senha", Senha2.value);
    localStorage.setItem("Data de Nascimento", Nascimento.value);
    alert("Dados Enviados com sucesso");
  }
};
