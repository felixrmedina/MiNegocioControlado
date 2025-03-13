const Gasto = require('../models/Gasto');

// crear gasto
exports.crearGasto = async (req, res) => {
  try {
    const gasto = new Gasto(req.body);
    await gasto.save();
    res.status(201).json(gasto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
 //obtener gasto
exports.obtenerGasto = async (req, res) => {
  try {
    const gasto = await Gasto.find();
    res.status(200).json(gasto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// actualizar gasto
exports.actualizarGasto = async (req, res) => {
  try {
    const { id } = req.params;
    const gastoActualizado = await Gasto.findByIdAndUpdate(id, req.body, {
      new: true, // Devuelve el gasto actualizado
    });

    if (!gastoActualizado) {
      return res.status(404).json({ error: 'Gasto no encontrado' });
    }

    res.status(200).json(gastoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// eliminar gasto

exports.eliminarGasto = async (req, res) => {
  try {
    const { id } = req.params;
    const gastoEliminado = await Gasto.findByIdAndDelete(id);

    if (!gastoEliminado) {
      return res.status(404).json({ error: 'Gasto no encontrado' });
    }

    res.status(200).json({ message: 'Gasto eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};