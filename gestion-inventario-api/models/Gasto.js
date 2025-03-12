const mongoose = require('mongoose');

const GastoSchema = new mongoose.Schema({
  fecha_gasto: { type: Date, default: Date.now },
  descripcion: { type: String, required: true },
  monto: { type: Number, required: true },
  categoria: { type: String, required: true },
  proveedor: { type: String },
  empleado: { type: String, required: true },
});

module.exports = mongoose.model('Gasto', GastoSchema);