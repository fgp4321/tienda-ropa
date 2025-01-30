import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usuariosRoutes from "./routes/usuarios.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/usuarios", usuariosRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
