let number = document.getElementById("inp-number")
let result = document.getElementById("p-result")
function gerarTabuada() {
    let n = number.value
    result.innerHTML = ""
    for(let i = 1; i <= 10; i++) {
        result.innerHTML += `${n} x ${i} = ${n * i} <br>`
    }
}
