"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gastoController_1 = require("../controllers/gastoController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// Ruta para crear un gasto (protegida por token)
router.post('/', authMiddleware_1.verificarToken, gastoController_1.crearGasto);
// Ruta para obtener todos los gastos (protegida por token)
router.get('/', authMiddleware_1.verificarToken, gastoController_1.obtenerGasto);
// Ruta para actualizar un gasto (protegida por token)
router.put('/:id', authMiddleware_1.verificarToken, gastoController_1.actualizarGasto);
// Ruta para eliminar un gasto (protegida por token)
router.delete('/:id', authMiddleware_1.verificarToken, gastoController_1.eliminarGasto);
exports.default = router;
