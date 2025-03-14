import { Request, Response } from 'express';
import { Usuario, IUsuario } from '../models/Usuario';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Registro de un nuevo usuario
export const registrarUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nombre, rol, email, password } = req.body;

    // Verificar si el usuario ya existe
    const usuarioExistente: IUsuario | null = await Usuario.findOne({ email });
    if (usuarioExistente) {
      res.status(400).json({ error: 'El usuario ya existe' });
      return;
    }

    // Crear un nuevo usuario
    const usuario: IUsuario = new Usuario({ nombre, rol, email, password });
    await usuario.save();

    // Generar un token JWT
    const token: string = jwt.sign({ id: usuario._id, rol: usuario.rol }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1h',
    });

    res.status(201).json({ token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Inicio de sesión de un usuario
export const iniciarSesion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario existe
    const usuario: IUsuario | null = await Usuario.findOne({ email });
    if (!usuario) {
      res.status(400).json({ error: 'Credenciales inválidas' });
      return;
    }

    // Comparar contraseñas
    const esPasswordValido: boolean = await usuario.compararPassword(password);
    if (!esPasswordValido) {
      res.status(400).json({ error: 'Credenciales inválidas' });
      return;
    }

    // Generar un token JWT
    const token: string = jwt.sign({ id: usuario._id, rol: usuario.rol }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};