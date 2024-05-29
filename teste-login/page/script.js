let username = localStorage.getItem("Nome");

console.log(username);

if (username !== null) {
    document.getElementById("username").textContent = "Olá, " + username;
} else {
    document.getElementById("username").textContent = "Usuário Não logado";
}

let buttonBackLogin = document.getElementById("backLogin")

let backToLogin =  buttonBackLogin.addEventListener("click", function() {
    window.open("../index.html", '_self');
})