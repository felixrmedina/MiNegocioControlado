const Venta = require('../models/Venta');


// crear venta
exports.crearVenta = async (req, res) => {
  try {
    const venta = new Venta(req.body);
    await venta.save();
    res.status(201).json(venta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


//obtener venta

exports.obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.find().populate('productos_vendidos.producto_id');
    res.status(200).json(ventas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// actualizar venta
exports.actualizarVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const ventaActualizada = await Venta.findByIdAndUpdate(id, req.body, {
      new: true, // Devuelve la venta actualizada
    });

    if (!ventaActualizada) {
      return res.status(404).json({ error: 'Venta no encontrada' });
    }

    res.status(200).json(ventaActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// eliminar venta

exports.eliminarVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const ventaEliminada = await Venta.findByIdAndDelete(id);

    if (!ventaEliminada) {
      return res.status(404).json({ error: 'Venta no encontrada' });
    }

    res.status(200).json({ message: 'Venta eliminada correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};