/* modelos/usuarios.model.js */
import connection from "../config/db.js";
import bcrypt from "bcryptjs";

export const createUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const query = "INSERT INTO usuarios (nombre, apellido, email, password, telefono, direccion, rol) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [user.nombre, user.apellido, user.email, hashedPassword, user.telefono, user.direccion, user.rol || "cliente"];
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, results) => {
      if (err) reject(err);
      else resolve(results[0]);
    });
  });
};

export const findAllUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT id, nombre, apellido, email, telefono, direccion, rol, estado FROM usuarios", (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

export const updateUser = (id, userData) => {
  const { nombre, apellido, telefono, direccion, estado } = userData;
  const query = "UPDATE usuarios SET nombre = ?, apellido = ?, telefono = ?, direccion = ?, estado = ?, updated_at = NOW() WHERE id = ?";
  const values = [nombre, apellido, telefono, direccion, estado, id];
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE usuarios SET deleted_at = NOW() WHERE id = ?", [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};