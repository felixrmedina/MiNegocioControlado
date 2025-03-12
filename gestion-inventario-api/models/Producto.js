const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Producto', ProductoSchema);