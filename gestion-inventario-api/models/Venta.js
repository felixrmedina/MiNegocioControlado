const mongoose = require('mongoose');

const VentaSchema = new mongoose.Schema({
  fecha_venta: { type: Date, default: Date.now },
  productos_vendidos: [
    {
      producto_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
      cantidad: { type: Number, required: true },
      precio_unitario: { type: Number, required: true },
      subtotal: { type: Number, required: true },
    },
  ],
  total_venta: { type: Number, required: true },
  metodo_pago: { type: String, required: true },
  empleado: { type: String, required: true },
});

module.exports = mongoose.model('Venta', VentaSchema);