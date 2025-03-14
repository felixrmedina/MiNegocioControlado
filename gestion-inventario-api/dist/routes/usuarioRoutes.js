"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioController_1 = require("../controllers/usuarioController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// Ruta para crear un usuario (protegida por token)
router.post('/', authMiddleware_1.verificarToken, usuarioController_1.crearUsuario);
// Ruta para obtener todos los usuarios (protegida por token)
router.get('/', authMiddleware_1.verificarToken, usuarioController_1.obtenerUsuario);
// Ruta para actualizar un usuario (protegida por token)
router.put('/:id', authMiddleware_1.verificarToken, usuarioController_1.actualizarUsuario);
// Ruta para eliminar un usuario (protegida por token)
router.delete('/:id', authMiddleware_1.verificarToken, usuarioController_1.eliminarUsuario);
exports.default = router;
