import express from 'express';
import { crearVenta, obtenerVentas, actualizarVenta, eliminarVenta } from '../controllers/ventaController';
import { verificarToken } from '../middleware/authMiddleware';

const router = express.Router();

// Ruta para crear una venta (protegida por token)
router.post('/', verificarToken, crearVenta);

// Ruta para obtener todas las ventas (protegida por token)
router.get('/', verificarToken, obtenerVentas);

// Ruta para actualizar una venta (protegida por token)
router.put('/:id', verificarToken, actualizarVenta);

// Ruta para eliminar una venta (protegida por token)
router.delete('/:id', verificarToken, eliminarVenta);

export default router;