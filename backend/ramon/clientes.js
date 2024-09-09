const db = require('./db.json')
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')
const bcrypt = require('bcryptjs')

const listClients = async (req,res) => {
    var clients = db.clientes
    res.json(clients)
}
const getClient = async (req, res) => {
    const _id = req.params.id
    const lista_clients = db.clientes
    const client = lista_clients.find(
        (client) => client.id == _id
        )
    client ? res.send(client) : res.status(404).send({error:'not found'})
}
const createClient = async (req,res) => {
    const dados = req.body
    const lista_clients = db.clientes
    const emailExist = lista_clients.find(
        (cliente) => cliente.email == dados.email
        )
    if(!dados.nome || !dados.email || !dados.senha) {
       return res.status(406).send({error:'Nome, email e senha devem ser informados'})
    } 
    if(emailExist) {
       return res.status(406).send({error:'Email já cadastrado'})
    }
    const _id = uuidv4()
    const senhaCriptografada = await bcrypt.hash(dados.senha, 10);
    dados.senha = senhaCriptografada
    dados.id = _id
    db.clientes.push(dados)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if (err){
            res.status(500).send({error:'erro no servidor'})
        }
    })
    res.status(201).send({ id: _id, nome: dados.nome, email: dados.email });
}
const updateClient = async (req,res) => {
    const _id = req.params.id
    const dados = req.body
    const lista_clients = db.clientes
    const client = lista_clients.find(
        (cliente) => cliente.id == _id
        )
    if (!client || !dados) {
        res.status(404).send({error:'not found'})
    }
    // atualizar o produto
    for(const dado in dados) {
       if(!dado in client) {
        console.log('erro esse dado não existe');
        continue
       }
       client[dado] = dados[dado];
       fs.writeFile('./db.json', JSON.stringify(db), (err) => {
           if (err){
               res.status(500).send({error:'erro no servidor'})
           }
       })
       res.status(200).send({client})
    }
}
const deleteClient = async (req,res) => {
    const _id = req.params.id
    const lista_clients = db.clientes
    const client = lista_clients.find(
        (cliente) => cliente.id == _id
    )
    // deletar o produto
    var idx = lista_clients.indexOf(client)
    lista_clients.splice(idx,1)
    fs.writeFile('./db.json', JSON.stringify(db), (err) => {
        if(err) {
            res.status(500).send({error:'erro no servidor'})
        }
    })
    res.status(204).send();
}

module.exports = {listClients, getClient, createClient, updateClient, deleteClient}