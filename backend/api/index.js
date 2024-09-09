const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const rotas1 = require("./rotas/rotas_produtos", );
const rotas2 = require("./rotas/rotas_clientes", );



app.use(bodyParser.json());

app.use("/produtos", rotas1);
app.use("/clientes", rotas2)

// app.listen(8000,(req,res)=> {
//      console.log("RODANDO NA PORTA 8000")
// });

module.exports = app


