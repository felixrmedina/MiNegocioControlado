const Ingreso = require('../models/Ingreso');

exports.crearIngreso = async (req, res) => {
  try {
    const ingreso = new Ingreso(req.body);
    await ingreso.save();
    res.status(201).json(ingreso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerIngreso = async (req, res) => {
  try {
    const ingreso = await Gasto.find();
    res.status(200).json(ingreso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Agrega más métodos según sea necesario