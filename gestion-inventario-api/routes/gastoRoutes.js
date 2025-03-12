const express = require('express');
const router = express.Router();
const gastpController = require('../controllers/gastoController');

router.post('/', gastpController.crearGasto);
router.get('/', gastpController.obtenerGasto);
// Agrega más rutas según sea necesario

module.exports = router;