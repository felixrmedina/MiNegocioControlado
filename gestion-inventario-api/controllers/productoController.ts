import { Request, Response } from 'express';
import Producto, { IProducto } from '../models/Producto';

// crear producto
export const crearProducto = async (req: Request, res: Response): Promise<void> => {
  try {
    const producto: IProducto = new Producto(req.body);
    await producto.save();
    res.status(201).json(producto);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


// obtener producto

export const obtenerProductos = async (req: Request, res: Response): Promise<void> => {
  try {
    const productos: IProducto[] = await Producto.find();
    res.status(200).json(productos);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// actualizar producto
export const actualizarProducto = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const productoActualizado: IProducto | null = await Producto.findByIdAndUpdate(id, req.body, {
      new: true, // Devuelve el producto actualizado
    });

    if (!productoActualizado) {
      res.status(404).json({ error: 'Producto no encontrado' });
      return;
    }

    res.status(200).json(productoActualizado);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// eliminar producto

export const eliminarProducto = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const productoEliminado: IProducto | null = await Producto.findByIdAndDelete(id);

    if (!productoEliminado) {
      res.status(404).json({ error: 'Producto no encontrado' });
      return;
    }

    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};