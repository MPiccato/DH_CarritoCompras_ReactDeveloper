import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {

  //Manejo del estado de los productos
  const [products, setProducts] = useState([]);

  //Llamado a la API para obtener los productos
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al cargar los productos",
        text: error.message,
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
