const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuario);
// Agrega más rutas según sea necesario

module.exports = router;