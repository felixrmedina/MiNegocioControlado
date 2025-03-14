import express from 'express';
import { crearProducto, obtenerProductos, actualizarProducto, eliminarProducto } from '../controllers/productoController';
import { verificarToken } from '../middleware/authMiddleware';
import { verificarRol } from '../middleware/roleMiddleware';

const router = express.Router();

// Ruta para crear un producto (protegida por token y rol de administrador)
router.post('/', verificarToken, verificarRol(['Admin']), crearProducto);

// Ruta para obtener todos los productos (protegida por token)
router.get('/', verificarToken, obtenerProductos);

// Ruta para actualizar un producto (protegida por token y rol de administrador)
router.put('/:id', verificarToken, verificarRol(['Admin']), actualizarProducto);

// Ruta para eliminar un producto (protegida por token y rol de administrador)
router.delete('/:id', verificarToken, verificarRol(['Admin']), eliminarProducto);

export default router;