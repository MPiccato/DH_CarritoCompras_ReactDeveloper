import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CardComponent } from "../components/CardComponent";


export const ProductsPage = () => {

  //Manejo del estado de los productos
  const [products,setProducts]=useState([])

  //Llamado a la API para obtener los productos
  const fetchProducts = async() => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)


    } catch (error) {
      Swal.fire(
        {
          icon: 'error',
          title: 'Error al cargar los productos',
          text: error.message,
        }
      )
    }

    
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <>
      <h1>Productos</h1>
      <hr/>
      {products.map(product => (
        <CardComponent
          key={product.id}
          image={product.image}
          title = {product.title}
          description = {product.description}
          price = {product.price}
        />

      )

      )}

    </>
  )
}
