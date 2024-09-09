const express = require('express')
const router = express.Router()
const clientes = require('../clientes')

router.get('/', clientes.listClients)
router.get('/:id', clientes.getClient)
router.post('/', clientes.createClient )
router.post('/:id', clientes.updateClient )
router.delete('/', clientes.deleteClient)

module.exports = router;