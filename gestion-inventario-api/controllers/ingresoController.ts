import { Request, Response } from 'express';
import Ingreso, { IIngreso } from '../models/Ingreso';

//crear ingreso
export const crearIngreso = async (req: Request, res: Response): Promise<void> => {
  try {
    const ingreso: IIngreso = new Ingreso(req.body);
    await ingreso.save();
    res.status(201).json(ingreso);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
// obtener ingreso
export const obtenerIngreso = async (req: Request, res: Response): Promise<void> => {
  try {
    const ingreso: IIngreso[] = await Ingreso.find();
    res.status(200).json(ingreso);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// actualizar ingreso
export const actualizarIngreso = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const ingresoActualizado: IIngreso | null = await Ingreso.findByIdAndUpdate(id, req.body, {
      new: true, // Devuelve el producto actualizado
    });

    if (!ingresoActualizado) {
      res.status(404).json({ error: 'Ingreso no encontrado' });
      return;
    }

    res.status(200).json(ingresoActualizado);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// eliminar ingreso

export const eliminarIngreso = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const ingresoEliminado = await Ingreso.findByIdAndDelete(id);

    if (!ingresoEliminado) {
      res.status(404).json({ error: 'Ingreso no encontrado' });
      return;
    }

    res.status(200).json({ message: 'Ingreso eliminado correctamente' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};