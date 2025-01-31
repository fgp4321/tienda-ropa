import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Acceso denegado" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // El token ya incluye el ID, email y rol
    next();
  } catch (error) {
    res.status(401).json({ message: "Token no válido" });
  }
};

export { authMiddleware };
