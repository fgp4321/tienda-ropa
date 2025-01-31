import express from "express";
import { registerUser, loginUser, getUsers, updateUserController, deleteUserController } from "../controllers/usuarios.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", authMiddleware, roleMiddleware("admin"), getUsers);
router.put("/:id", authMiddleware, roleMiddleware("admin"), updateUserController);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteUserController);

//Sesión
router.get("/validar-token", authMiddleware, (req, res) => {
    res.json({ mensaje: "Sesión activa", user: req.user });
});
  
export default router;