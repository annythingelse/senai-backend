// verificando inputs
let formsOk = false;

function openHome() {
  window.open('./page/index.html', '_self');
}

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

function formResponse(responseText) {
  const getHtml = document.getElementById("formulario-de-cadastro")  
  const DivResponse = document.createElement('div');
  DivResponse.setAttribute("id", "response");
  const response = document.createElement('p');
  getHtml.appendChild(DivResponse);
  DivResponse.appendChild(response);
  response.textContent = responseText;
}

let login = '', senha, email

let usr = []
let snh = []
let mail = []
let bhday = []

function criaLogin() {
    if(localStorage.usrArr) {
        usr = JSON.parse(localStorage.getItem('usrArr'))
    } 
    if(localStorage.snhArr) {
        snh = JSON.parse(localStorage.getItem('snhArr'))
    }
    if(localStorage.emailArr) {
      mail = JSON.parse(localStorage.getItem('emailArr'))
    }
    if(localStorage.birthdayArr) {
      bhday = JSON.parse(localStorage.getItem('birthdayArr'))
    }
    usr.push(Nome.value)
    localStorage.usrArr = JSON.stringify(usr)

    snh.push(Senha2.value)
    localStorage.snhArr = JSON.stringify(snh)

    mail.push(Email.value)
    localStorage.emailArr = JSON.stringify(mail)

    bhday.push(Nascimento.value)
    localStorage.birthdayArr = JSON.stringify(bhday)

    if(usr.includes(Nome.value) && snh.includes(Senha2.value) && mail.includes(Email.value) && bhday.includes(Nascimento.value)) {
      formResponse('Login criado com sucesso!') ;
    }else {
      formResponse('Login não pode ser criado!') ;      
    }
}


verificandoInputs = function () {
  verificarCamposPreenchidos();
  if (Senha1.value !== Senha2.value) {
    formResponse("As senhas precisam ser iguais");
  } 
  else if (localStorage.getItem("Email") !== Email.value) {
    formsOk = true;
  } else {
    formResponse("Email já cadastrado")
  }
  if (formsOk == true) {
    criaLogin()
    setTimeout(openHome, 1000);
  }
};


// Home
function backToLogin() {
  window.open("../index.html", '_self');
}

let getUsername = localStorage.getItem("usrArr")
let usernameArray = JSON.parse(getUsername);

if(usernameArray.length > 0) {
  let lastUsername = usernameArray.pop()
  let username = lastUsername.replace(/^"|"$/g, '');
  document.getElementById("username").textContent = "Olá, " + username;

} else {
  document.getElementById("username").textContent = "Usuário Não logado";
}
