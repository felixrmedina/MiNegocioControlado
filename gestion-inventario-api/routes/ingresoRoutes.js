const express = require('express');
const router = express.Router();
const ingresoController = require('../controllers/ingresoController');
const { verificarToken } = require('../middleware/authMiddleware');

router.post('/', verificarToken, ingresoController.crearIngreso);
router.get('/', verificarToken, ingresoController.obtenerIngreso);
router.put('/:id', verificarToken, ingresoController.actualizarIngreso);
router.delete('/:id', verificarToken, ingresoController.eliminarIngreso);

module.exports = router;