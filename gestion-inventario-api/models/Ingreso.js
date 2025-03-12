const mongoose = require('mongoose');

const IngresoSchema = new mongoose.Schema({
  fecha_ingreso: { type: Date, default: Date.now },
  descripcion: { type: String, required: true },
  monto: { type: Number, required: true },
  categoria: { type: String, required: true },
  empleado: { type: String, required: true },
});

module.exports = mongoose.model('Ingreso', IngresoSchema);