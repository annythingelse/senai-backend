let user = document.getElementById("inp-user")
let password = document.getElementById("inp-password")

let sucessLogin = false

function Login() {
    if(user.value !== "Johny Depp" && password.value !== "123") {
        alert("user and password are incorrect")
        user.value =""
        password.value = ""
    } else {
        alert("login sucess")
        sucessLogin = true
        user.value =""
        password.value = ""
    }

    if(sucessLogin == true) {
        window.open("./home.html", '_self');
    }

}
