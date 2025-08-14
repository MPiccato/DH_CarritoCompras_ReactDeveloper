import { useEffect, useState } from "react";
import "../styles/CardComponent.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export const CardComponent = ({
  id,
  image,
  title,
  description,
  price,
  handlerAdd,
  handlerRemove,
}) => {
  const { shoppingList } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const addedProduct = () => {
    handlerAdd();
    setAdded(true);
  };
  const removeProduct = () => {
    handlerRemove();
    setAdded(false);
  };

  const checkAdded = () => {
    const isAdded = shoppingList.some((product) => product.id === id);
    setAdded(isAdded);
  };

  useEffect(() => {
    checkAdded();
  }, [shoppingList]);

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">{price} USD</p>

        {added ? (
          <button
            className="remove-product"
            type="button"
            onClick={removeProduct}
          >
            Quitar del carrito
          </button>
        ) : (
          <button className="add-product" type="button" onClick={addedProduct}>
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};
