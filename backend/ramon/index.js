const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rotas_produtos = require('./rotas/rotas-produtos')
const rotas_clientes = require('./rotas/rotas-clientes')
const rotas_pedidos = require('./rotas/rotas-pedidos')

app.use(bodyParser.json())

app.use('/produtos', rotas_produtos)
app.use('/clientes', rotas_clientes)
app.use('/pedidos', rotas_pedidos)

app.listen(8000)

module.exports = app;
