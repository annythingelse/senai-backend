const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const isPalindrome = require("./function")

app.use(bodyParser.json())

app.post('/ramon', function(req, res){
    const response = isPalindrome(req.body.palavra)
    if(response === true) {
        res.send("é palindromo")
    } else {
        res.send("não é palindromo")
    }
})

const db = require("./db.json")

app.get("/produtos", function(req, res) {
    var produtos = db.produtos
    res.json(produtos)
})

app.get('/produtos/:id', function(req, res) {
    const _id = req.params.id
    const produtos = db.produtos
    const result = produtos.filter(item => item.id == _id);
    res.send(result)
})

app.listen(8000)
