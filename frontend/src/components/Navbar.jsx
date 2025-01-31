import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Tienda Ropa</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-400">Inicio</Link></li>
          <li><Link to="/productos" className="hover:text-gray-400">Productos</Link></li>
          <li><Link to="/contacto" className="hover:text-gray-400">Contacto</Link></li>
          <li><Link to="/login" className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">Iniciar Sesión</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
