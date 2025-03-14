"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GastoSchema = new mongoose_1.Schema({
    fecha_gasto: { type: Date, default: Date.now },
    descripcion: { type: String, required: true },
    monto: { type: Number, required: true },
    categoria: { type: String, required: true },
    proveedor: { type: String },
    empleado: { type: String, required: true },
});
exports.default = (0, mongoose_1.model)('Gastos', GastoSchema);
