const Ingreso = require('../models/Ingreso');
//crear ingreso
exports.crearIngreso = async (req, res) => {
  try {
    const ingreso = new Ingreso(req.body);
    await ingreso.save();
    res.status(201).json(ingreso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// obtener ingreso
exports.obtenerIngreso = async (req, res) => {
  try {
    const ingreso = await Gasto.find();
    res.status(200).json(ingreso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// actualizar ingreso
exports.actualizarIngreso = async (req, res) => {
  try {
    const { id } = req.params;
    const ingresoActualizado = await Ingreso.findByIdAndUpdate(id, req.body, {
      new: true, // Devuelve el producto actualizado
    });

    if (!ingresoActualizado) {
      return res.status(404).json({ error: 'Ingreso no encontrado' });
    }

    res.status(200).json(ingresoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// eliminar ingreso

exports.eliminarIngreso = async (req, res) => {
  try {
    const { id } = req.params;
    const ingresoEliminado = await Ingreso.findByIdAndDelete(id);

    if (!ingresoEliminado) {
      return res.status(404).json({ error: 'Ingreso no encontrado' });
    }

    res.status(200).json({ message: 'Ingreso eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};