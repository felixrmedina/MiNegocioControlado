import { Request, Response } from 'express';
import { Usuario, IUsuario } from '../models/Usuario';

// Crear usuario
export const crearUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuario: IUsuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener usuarios
export const obtenerUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarios: IUsuario[] = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar usuario
export const actualizarUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const usuarioActualizado: IUsuario | null = await Usuario.findByIdAndUpdate(id, req.body, {
      new: true, // Devuelve el usuario actualizado
    });

    if (!usuarioActualizado) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    res.status(200).json(usuarioActualizado);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar usuario
export const eliminarUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const usuarioEliminado: IUsuario | null = await Usuario.findByIdAndDelete(id);

    if (!usuarioEliminado) {
      res.status(404).json({ error: 'Usuario no encontrado' });
      return;
    }

    res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};