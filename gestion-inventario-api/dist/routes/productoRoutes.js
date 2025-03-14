"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productoController_1 = require("../controllers/productoController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const roleMiddleware_1 = require("../middleware/roleMiddleware");
const router = express_1.default.Router();
// Ruta para crear un producto (protegida por token y rol de administrador)
router.post('/', authMiddleware_1.verificarToken, (0, roleMiddleware_1.verificarRol)(['Admin']), productoController_1.crearProducto);
// Ruta para obtener todos los productos (protegida por token)
router.get('/', authMiddleware_1.verificarToken, productoController_1.obtenerProductos);
// Ruta para actualizar un producto (protegida por token y rol de administrador)
router.put('/:id', authMiddleware_1.verificarToken, (0, roleMiddleware_1.verificarRol)(['Admin']), productoController_1.actualizarProducto);
// Ruta para eliminar un producto (protegida por token y rol de administrador)
router.delete('/:id', authMiddleware_1.verificarToken, (0, roleMiddleware_1.verificarRol)(['Admin']), productoController_1.eliminarProducto);
exports.default = router;
