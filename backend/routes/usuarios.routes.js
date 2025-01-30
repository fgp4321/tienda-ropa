import express from "express";
import { registerUser, loginUser, getUsers, updateUserController, deleteUserController } from "../controllers/usuarios.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", authMiddleware, getUsers);
router.put("/:id", authMiddleware, updateUserController);
router.delete("/:id", authMiddleware, deleteUserController);

//Sesión
router.get("/validar-token", authMiddleware, (req, res) => {
    res.json({ mensaje: "Sesión activa", user: req.user });
});
  
export default router;