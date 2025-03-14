import { Request, Response } from 'express';
import Gasto, { IGastos } from '../models/Gasto';

// crear gasto
export const crearGasto = async (req:Request, res:Response): Promise<void> => {
  try {
    const gasto: IGastos = new Gasto(req.body);
    await gasto.save();
    res.status(201).json(gasto);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
 //obtener gasto
export const obtenerGasto = async (req:Request, res:Response): Promise<void> => {
  try {
    const gasto: IGastos[] = await Gasto.find();
    res.status(200).json(gasto);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

// actualizar gasto
export const actualizarGasto = async (req: Request, res:Response):Promise<void> => {
  try {
    const { id } = req.params;
    const gastoActualizado: IGastos | null = await Gasto.findByIdAndUpdate(id, req.body, {
      new: true, // Devuelve el gasto actualizado
    });

    if (!gastoActualizado) {
      res.status(404).json({ error: 'Gasto no encontrado' });
      return;
    }

    res.status(200).json(gastoActualizado);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

// eliminar gasto

export const eliminarGasto = async (req:Request, res:Response):Promise<void> => {
  try {
    const { id } = req.params;
    const gastoEliminado: IGastos | null = await Gasto.findByIdAndDelete(id);

    if (!gastoEliminado) {
      res.status(404).json({ error: 'Gasto no encontrado' });
      return;
    }

    res.status(200).json({ message: 'Gasto eliminado correctamente' });
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};