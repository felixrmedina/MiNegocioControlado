const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const { verificarToken } = require('../middleware/authMiddleware');
const { verificarRol } = require('../middleware/roleMiddleware');

router.post('/', verificarToken, verificarRol(['Admin']), productoController.crearProducto);
router.get('/', verificarToken, productoController.obtenerProductos);
router.put('/:id', verificarToken, verificarRol(['Admin']), productoController.actualizarProducto);
router.delete('/:id', verificarToken, verificarRol(['Admin']), productoController.eliminarProducto);
// Agrega más rutas según sea necesario

module.exports = router;