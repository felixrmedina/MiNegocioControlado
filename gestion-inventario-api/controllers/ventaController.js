const Venta = require('../models/Venta');

exports.crearVenta = async (req, res) => {
  try {
    const venta = new Venta(req.body);
    await venta.save();
    res.status(201).json(venta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.find().populate('productos_vendidos.producto_id');
    res.status(200).json(ventas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Agrega más métodos según sea necesario