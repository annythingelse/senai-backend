const express = require("express");
const router = express.Router();
const controlador_produtos = require("../controladores/control_produtos");

router.get("", controlador_produtos.listProdutos);
router.get("/:id", controlador_produtos.getProduto);
router.post("", controlador_produtos.createProduto);
router.post("/:id", controlador_produtos.updateProduto);
router.delete("/:id", controlador_produtos.deleteProduto);

module.exports = router;
