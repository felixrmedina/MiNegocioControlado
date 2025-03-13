const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');
const { verificarToken } = require('../middleware/authMiddleware');

router.post('/', verificarToken, ventaController.crearVenta);
router.get('/', verificarToken, ventaController.obtenerVentas);
router.put('/:id', verificarToken, ventaController.actualizarVenta);
router.delete('/:id', verificarToken, ventaController.eliminarVenta);

module.exports = router;