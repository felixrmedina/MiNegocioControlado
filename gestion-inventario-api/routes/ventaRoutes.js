const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

router.post('/', ventaController.crearVenta);
router.get('/', ventaController.obtenerVentas);
// Agrega más rutas según sea necesario

module.exports = router;