import express from 'express';
import { crearUsuario, obtenerUsuario, actualizarUsuario, eliminarUsuario } from '../controllers/usuarioController';
import { verificarToken } from '../middleware/authMiddleware';

const router = express.Router();

// Ruta para crear un usuario (protegida por token)
router.post('/', verificarToken, crearUsuario);

// Ruta para obtener todos los usuarios (protegida por token)
router.get('/', verificarToken, obtenerUsuario);

// Ruta para actualizar un usuario (protegida por token)
router.put('/:id', verificarToken, actualizarUsuario);

// Ruta para eliminar un usuario (protegida por token)
router.delete('/:id', verificarToken, eliminarUsuario);

export default router;