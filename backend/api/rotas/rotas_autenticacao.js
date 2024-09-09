const express = require("express");
const router = express.Router();
const controlador_autenticacao = require("../controladores/control_autenticacao");

router.post('/login', controlador_autenticacao.login)

module.exports = router