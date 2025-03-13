exports.verificarRol = (rolesPermitidos) => (req, res, next) => {
    const usuario = req.usuario;
  
    if (!rolesPermitidos.includes(usuario.rol)) {
      return res.status(403).json({ error: 'Acceso denegado. No tienes permisos suficientes.' });
    }
  
    next();
  };