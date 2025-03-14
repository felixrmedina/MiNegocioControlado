import express from 'express';
import { crearIngreso, obtenerIngreso, actualizarIngreso, eliminarIngreso } from '../controllers/ingresoController';
import { verificarToken } from '../middleware/authMiddleware';

const router = express.Router();

// Ruta para crear un ingreso (protegida por token)
router.post('/', verificarToken, crearIngreso);

// Ruta para obtener todos los ingresos (protegida por token)
router.get('/', verificarToken, obtenerIngreso);

// Ruta para actualizar un ingreso (protegida por token)
router.put('/:id', verificarToken, actualizarIngreso);

// Ruta para eliminar un ingreso (protegida por token)
router.delete('/:id', verificarToken, eliminarIngreso);

export default router;