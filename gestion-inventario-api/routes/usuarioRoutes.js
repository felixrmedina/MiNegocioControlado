const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { verificarToken } = require('../middleware/authMiddleware');

router.post('/', verificarToken, usuarioController.crearUsuario);
router.get('/', verificarToken, usuarioController.obtenerUsuario);
router.put('/:id', verificarToken, usuarioController.actualizarUsuario);
router.delete('/:id', verificarToken, usuarioController.eliminarUsuario);

module.exports = router;