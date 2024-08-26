const express = require('express')
const router = express.Router()
const produtos = require('../produtos')

router.get('', produtos.listProdutos)
router.get('/:id', produtos.getProduto)
router.post('', produtos.createProduto )
router.post('/:id', produtos.updateProduto )
router.delete('', produtos.deleteProduto )

module.exports = router;