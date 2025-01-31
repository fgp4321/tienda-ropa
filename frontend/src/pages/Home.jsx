import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Bienvenido a Tienda Ropa</h1>
      <p className="text-gray-600 mt-4">Descubre nuestra colección de moda y compra con confianza.</p>
      <Link to="/productos" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600">
        Ver Productos
      </Link>
    </div>
  );
};

export default Home;
