import { Request, Response } from 'express';
import { Venta, IVenta } from '../models/Venta';

// Crear una venta
export const crearVenta = async (req: Request, res: Response): Promise<void> => {
  try {
    const venta: IVenta = new Venta(req.body);
    await venta.save();
    res.status(201).json(venta);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las ventas
export const obtenerVentas = async (req: Request, res: Response): Promise<void> => {
  try {
    const ventas: IVenta[] = await Venta.find().populate('productos_vendidos.producto_id');
    res.status(200).json(ventas);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar una venta
export const actualizarVenta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const ventaActualizada: IVenta | null = await Venta.findByIdAndUpdate(id, req.body, {
      new: true, // Devuelve la venta actualizada
    });

    if (!ventaActualizada) {
      res.status(404).json({ error: 'Venta no encontrada' });
      return;
    }

    res.status(200).json(ventaActualizada);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una venta
export const eliminarVenta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const ventaEliminada: IVenta | null = await Venta.findByIdAndDelete(id);

    if (!ventaEliminada) {
      res.status(404).json({ error: 'Venta no encontrada' });
      return;
    }

    res.status(200).json({ message: 'Venta eliminada correctamente' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};