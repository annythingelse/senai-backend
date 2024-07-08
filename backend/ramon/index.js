const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const isPalindrome = require("./function")

app.use(bodyParser.json())

app.post('/ramon', function(req, res){
    // console.log(req.body);
    const response = isPalindrome(req.body.palavra)
    if(response === true) {
        res.send("á palindromo")
    } else {
        res.send("não é palindromo")
    }
})

app.listen(8000)
