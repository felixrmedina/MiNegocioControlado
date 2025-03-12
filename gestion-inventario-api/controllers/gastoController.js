const Gasto = require('../models/Gasto');

exports.crearGasto = async (req, res) => {
  try {
    const gasto = new Gasto(req.body);
    await gasto.save();
    res.status(201).json(gasto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerGasto = async (req, res) => {
  try {
    const gasto = await Gasto.find();
    res.status(200).json(gasto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Agrega más métodos según sea necesario