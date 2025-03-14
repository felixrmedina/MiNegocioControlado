"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ingresoController_1 = require("../controllers/ingresoController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
// Ruta para crear un ingreso (protegida por token)
router.post('/', authMiddleware_1.verificarToken, ingresoController_1.crearIngreso);
// Ruta para obtener todos los ingresos (protegida por token)
router.get('/', authMiddleware_1.verificarToken, ingresoController_1.obtenerIngreso);
// Ruta para actualizar un ingreso (protegida por token)
router.put('/:id', authMiddleware_1.verificarToken, ingresoController_1.actualizarIngreso);
// Ruta para eliminar un ingreso (protegida por token)
router.delete('/:id', authMiddleware_1.verificarToken, ingresoController_1.eliminarIngreso);
exports.default = router;
