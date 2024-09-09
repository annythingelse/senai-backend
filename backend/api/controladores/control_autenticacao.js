const db = require("../db.json")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (req, res) =>{
    try {
        const {email, senha} = req.body;
        const lista_cliente = db.clientes

        if(!email || !senha) {
            res.send({erro: 'email ou senha não informado(s)'})
        }

        const cliente = lista_cliente.find((cliente) => cliente?.email == email)

        if(!cliente){
            res.status(404).send({error:'not found'})
        }

        const senhaValida = bcrypt.compareSync(senha, cliente.senha)
        if(!senhaValida){
            res.send({error: 'a senha nao é valida'})
        }

        const token = jwt.sign(
            {
                nome: cliente.nome,
                email: cliente.email,
                _id: cliente.id
            },
            'jwt_secret_key',
            {expiresIn: 1000*60*60*24*365}
        )
        
        console.log(token)

       res.cookie("TokenAulaBE", token).send({message: 'ok!'})

    } catch (e) {
        console.log(e)
    }
}

module.exports = {login}