const express = require('express');
const router = express.Router();
const gastoController = require('../controllers/gastoController');
const { verificarToken } = require('../middleware/authMiddleware');

router.post('/', verificarToken, gastoController.crearGasto);
router.get('/', verificarToken, gastoController.obtenerGasto);
router.put('/:id', verificarToken, gastoController.actualizarGasto);
router.delete('/:id', verificarToken, gastoController.eliminarGasto);

module.exports = router;