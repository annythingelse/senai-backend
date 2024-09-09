const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const rotas1 = require("./rotas/rotas_produtos", );
const rotas2 = require("./rotas/rotas_clientes", );
const rotas_atenticacao = require("./rotas/rotas_autenticacao")

app.use(bodyParser.json());
app.use("/produtos", rotas1);
app.use("/clientes", rotas2)
app.use('/auth', rotas_atenticacao)

app.listen(8000)

module.exports = app


