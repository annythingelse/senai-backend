const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const isPalindrome = require("./function")
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

app.use(bodyParser.json())

app.post('/ramon', function(req, res){
    const response = isPalindrome(req.body.palavra)
    if(response === true) {
        res.send("é palindromo")
    } else {
        res.send("não é palindromo")
    }
})
// link: http://localhost:8000/ramon


const db = require("./db.json")

app.get("/produtos", function(req, res) {
    var produtos = db.produtos
    res.json(produtos)
})

app.get('/produtos/:id', function(req, res) {
    const _id = req.params.id
    const lista_produtos = db.produtos
    const produto = lista_produtos.find(item => item.id == _id);
    produto ? res.send(produto) : res.status(404).send({error: 'not found'})
})
// link: http://localhost:8000/produtos/:id


app.post('/produtos/', function(req, res){
    const data = req.body
    const _id = uuidv4()
    
    if(!data.nome || !data.preco) {
        res.status(406).send({error: 'Nome e preço devem ser informados'})
    } 
    
    data.id = _id
    lista_produto = db.produtos
    lista_produto.push(data)

    fs.writeFile('./db.json', JSON.stringify(db), 
     (err) => {
        if(err) {
            res.status(500).send({error: 'erro no servidor'})
        }
     }
    )
    res.status(204).send()
})
// link: http://localhost:8000/produtos/


// app.post('/produtos/', function(req, res){
//     const _id = req.body.id
//     console.log(_id);
// })


app.listen(8000)