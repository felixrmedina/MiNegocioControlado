import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Interfaz para el payload del token
interface IDecodedToken {
  id: string;
  rol: string;
}

// Middleware para verificar el token JWT
export const verificarToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization');

  if (!token) {
    res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as IDecodedToken;
    req.body = decoded; // Agregar el payload del token al objeto `req`
    next();
  } catch (error: any) {
    if (error.name === 'TokenExpiredError') {
      res.status(401).json({ error: 'Token expirado. Por favor, inicie sesión nuevamente.' });
      return;
    }
    res.status(400).json({ error: 'Token inválido.' });
  }
};