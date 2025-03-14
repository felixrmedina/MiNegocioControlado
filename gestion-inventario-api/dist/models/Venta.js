"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
const mongoose_1 = require("mongoose");
// Esquema de venta
const VentaSchema = new mongoose_1.Schema({
    fecha_venta: { type: Date, default: Date.now },
    productos_vendidos: [
        {
            producto_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Producto', required: true },
            cantidad: { type: Number, required: true },
            precio_unitario: { type: Number, required: true },
            subtotal: { type: Number, required: true },
        },
    ],
    total_venta: { type: Number, required: true },
    metodo_pago: { type: String, required: true },
    empleado: { type: String, required: true },
});
// Exportar el modelo
exports.Venta = (0, mongoose_1.model)('Venta', VentaSchema);
