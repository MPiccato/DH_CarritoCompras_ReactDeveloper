import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { CardComponent } from "../components/CardComponent";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export const ProductsPage = () => {
  const { products } = useContext(ProductContext);
  const { addProductToCart, removeProductFromCart } = useContext(CartContext);

  return (
    <>
      <h1>Productos</h1>
      <hr />
      {products.map((product) => (
        <CardComponent
          id={product.id}
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          handlerAdd={() => addProductToCart(product)}
          handlerRemove={() => removeProductFromCart(product.id)}
        />
      ))}
    </>
  );
};
