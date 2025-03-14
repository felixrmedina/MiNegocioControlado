"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ventaController_1 = require("../controllers/ventaController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// Ruta para crear una venta (protegida por token)
router.post('/', authMiddleware_1.verificarToken, ventaController_1.crearVenta);
// Ruta para obtener todas las ventas (protegida por token)
router.get('/', authMiddleware_1.verificarToken, ventaController_1.obtenerVentas);
// Ruta para actualizar una venta (protegida por token)
router.put('/:id', authMiddleware_1.verificarToken, ventaController_1.actualizarVenta);
// Ruta para eliminar una venta (protegida por token)
router.delete('/:id', authMiddleware_1.verificarToken, ventaController_1.eliminarVenta);
exports.default = router;
