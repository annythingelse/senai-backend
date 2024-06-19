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

let user = []

class User {
  constructor(usr, snh, mail, bhday) {
      this.usr = usr;
      this.snh = snh;
      this.mail = mail;
      this.bhday = bhday;
  }
}

function addUser() {
  verificarCamposPreenchidos();
  const loginExistente = user.some(i => i.mail === Email.value);

  if (loginExistente) {
    formResponse('Email já cadastrado!');
  } 
   
  else if (Senha1.value !== Senha2.value) {
    formResponse("As senhas precisam ser iguais");
  } 
  else {
      user.push(new User(Nome.value, Senha2.value, Email.value, Nascimento.value));
      // Converte o array de personagens para uma string JSON
      const userJSON = JSON.stringify(user);
  
      // Armazena a string JSON no localStorage
      localStorage.setItem('Users', userJSON);

      formResponse("Login Cadastrado com sucesso");
      setTimeout(openHome, 1000);
  }
}


// Função para carregar personagens do localStorage ao carregar a página
function carregarUsuarios() {
  const usersSalvosJSON = localStorage.getItem('Users');

  if (usersSalvosJSON) {
      const userSalvos = JSON.parse(usersSalvosJSON);
      user = userSalvos.map(i => 
        new User(Nome.value, Senha2.value, Email.value, Nascimento.value)
      );
  }
}

// Chama a função para carregar personagens quando a página é carregada
window.onload = carregarUsuarios;


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
