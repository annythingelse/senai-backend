const express = require("express");
const router = express.Router();
const controlador_clientes = require("../controladores/control_cliente");

router.get("", controlador_clientes.listClientes);
router.get("/:id", controlador_clientes.getCliente);
router.post("", controlador_clientes.createCliente);
router.post("/:id", controlador_clientes.updateCliente);
router.delete("/:id", controlador_clientes.deleteCliente);

module.exports = router;
