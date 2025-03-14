import express from 'express';
import { crearGasto, obtenerGasto, actualizarGasto, eliminarGasto } from '../controllers/gastoController';
import { verificarToken } from '../middleware/authMiddleware';

const router = express.Router();

// Ruta para crear un gasto (protegida por token)
router.post('/', verificarToken, crearGasto);

// Ruta para obtener todos los gastos (protegida por token)
router.get('/', verificarToken, obtenerGasto);

// Ruta para actualizar un gasto (protegida por token)
router.put('/:id', verificarToken, actualizarGasto);

// Ruta para eliminar un gasto (protegida por token)
router.delete('/:id', verificarToken, eliminarGasto);

export default router;