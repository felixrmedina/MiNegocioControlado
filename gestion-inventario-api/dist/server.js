"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
// Importar rutas
const productoRoutes_1 = __importDefault(require("./routes/productoRoutes"));
const ventaRoutes_1 = __importDefault(require("./routes/ventaRoutes"));
const gastoRoutes_1 = __importDefault(require("./routes/gastoRoutes"));
const ingresoRoutes_1 = __importDefault(require("./routes/ingresoRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
// Cargar variables de entorno
dotenv_1.default.config();
const app = (0, express_1.default)();
// Conectar a la base de datos
(0, db_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Rutas
app.use('/api/productos', productoRoutes_1.default);
app.use('/api/ventas', ventaRoutes_1.default);
app.use('/api/gastos', gastoRoutes_1.default);
app.use('/api/ingresos', ingresoRoutes_1.default);
app.use('/api/usuarios', usuarioRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
