const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
      if (!req.user || req.user.rol !== requiredRole) {
        return res.status(403).json({ message: "Acceso denegado. Permisos insuficientes." });
      }
      next();
    };
  };
  
  export { roleMiddleware };  