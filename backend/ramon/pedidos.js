const db = require('./db.json')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

const listPedidos = async (req,res) => {
    var pedidos = db.pedidos
    res.json(pedidos)
}
const getPedidos = async (req, res) => {
    const _id = req.params.id
    const lista_pedidos = db.pedidos
    const pedido = lista_pedidos.find(
        (pedido) => pedido.id == _id
        )
    pedido ? res.send(pedido) : res.status(404).send({error:'not found'})
}
const createPedido = async (req,res) => {
    const dados = req.body
    if(!dados.cliente_id || !dados.itens) {
       return res.status(406).send({error:'Id do cliente ou itens deve ser informado'})
    }
    const _id = uuidv4()
    dados.id = _id
    db.pedidos.push(dados)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if (err){
            res.status(500).send({error:'erro no servidor'})
        }
    })
    res.status(204).send()
}
const updatePedido = async (req,res) => {
    const _id = req.params.id
    const dados = req.body
    const lista_pedidos = db.pedidos
    const pedido = lista_pedidos.find(
        (pedido) => pedido.id == _id
        )
    if (!pedido || !dados) {
        res.status(404).send({error:'not found'})
    }
    // atualizar o produto
    for(const dado in dados) {
       if(!dado in pedido) {
        console.log('erro esse dado não existe');
        continue
       }
       pedido[dado] = dados[dado];
       fs.writeFile('./db.json', JSON.stringify(db), (err) => {
           if (err){
               res.status(500).send({error:'erro no servidor'})
           }
       })
       res.status(200).send({pedido})
    }
}
const deletePedido = async (req,res) => {
    const _id = req.params.id
    const lista_pedidos = db.pedidos
    const pedido = lista_pedidos.find(
        (pedido) => pedido.id == _id
    )
    // deletar o produto
    var idx = lista_pedidos.indexOf(pedido)
    lista_pedidos.splice(idx,1)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if(err) {
            res.status(500).send({error:'erro no servidor'})
        }
    })
    res.status(204).send();
}

module.exports = {listPedidos, getPedidos, createPedido, updatePedido, deletePedido}