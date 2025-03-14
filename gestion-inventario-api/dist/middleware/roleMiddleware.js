"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificarRol = void 0;
// Middleware para verificar el rol del usuario
const verificarRol = (rolesPermitidos) => {
    return (req, res, next) => {
        const usuario = req.body; // Asume que `req.usuario` contiene el payload del token JWT
        if (!usuario || !rolesPermitidos.includes(usuario.rol)) {
            res.status(403).json({ error: 'Acceso denegado. No tienes permisos suficientes.' });
            return;
        }
        next();
    };
};
exports.verificarRol = verificarRol;
