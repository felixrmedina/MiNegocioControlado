"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    categoria: { type: String, required: true },
    precio: { type: Number, required: true },
    costo: { type: Number, required: true },
    stock: { type: Number, required: true },
    proveedor: { type: String },
    fecha_creacion: { type: Date, default: Date.now },
    fecha_actualizacion: { type: Date, default: Date.now },
});
exports.default = (0, mongoose_1.model)('Producto', ProductoSchema);
