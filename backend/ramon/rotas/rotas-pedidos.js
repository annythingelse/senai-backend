const express = require('express')
const router = express.Router()
const pedidos = require('../pedidos')

router.get('/', pedidos.listPedidos)
router.get('/:id', pedidos.getPedidos)
router.post('/', pedidos.createPedido )
router.post('/:id', pedidos.updatePedido )
router.delete('/', pedidos.deletePedido)

module.exports = router;