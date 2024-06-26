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
  } else {
    Button.disabled = true;
  }
}


function formResponse(responseText) {
  const getHtml = document.getElementById("formulario-de-cadastro");
  let DivResponse = document.getElementById("response");
  
  if (!DivResponse) {
    DivResponse = document.createElement('div');
    DivResponse.setAttribute("id", "response");
    getHtml.appendChild(DivResponse);
  }

  DivResponse.textContent = responseText;
}

let user = JSON.parse(localStorage.getItem('Users')) || [];

class User {
  constructor(usr, snh, mail, bhday) {
      this.usr = usr;
      this.snh = snh;
      this.mail = mail;
      this.bhday = bhday;
  }
}

function addUser() {
  const loginExistente = user.some(i => i.mail === Email.value);
   
  if (loginExistente) {
    formResponse('Email já cadastrado!');
  } 

  else {
      user.push(new User(Nome.value, Senha2.value, Email.value, Nascimento.value));
      const userJSON = JSON.stringify(user);
      localStorage.setItem('Users', userJSON);
      formResponse("Login Cadastrado com sucesso");
      setTimeout(openHome, 1500);
  }
}

function cadastrarUsuario() {
  verificarCamposPreenchidos();
  if(Senha1.value !== Senha2.value) {
    formResponse("As senhas precisam ser iguais")
  } else {
    addUser()
  }
}



// Home
function backToLogin() {
  window.open("../index.html", '_self');
}

const getUsername = user.map(item => item.usr);
const lastUsername = getUsername.pop()
console.log(getUsername, lastUsername);

if(user.length > 0) {
  let username = lastUsername.replace(/^"|"$/g, '');
  document.getElementById("username").textContent = "Olá, " + username;
} else {
  document.getElementById("username").textContent = "Usuário Não logado";
}
