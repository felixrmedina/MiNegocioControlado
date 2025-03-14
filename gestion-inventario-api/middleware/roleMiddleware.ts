import { Request, Response, NextFunction } from 'express';

// Middleware para verificar el rol del usuario
export const verificarRol = (rolesPermitidos: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const usuario = req.body; // Asume que `req.usuario` contiene el payload del token JWT

    if (!usuario || !rolesPermitidos.includes(usuario.rol)) {
      res.status(403).json({ error: 'Acceso denegado. No tienes permisos suficientes.' });
      return;
    }

    next();
  };
};