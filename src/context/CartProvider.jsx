import { useReducer } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const initialState = [];

  const cartReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return [...state, action.payload];
      case "REMOVE_PRODUCT":
        return state.filter((product) => product.id !== action.payload);
      case "INCREMENT_PRODUCT": // TODO
        break;
      case "DECREMENT_PRODUCT": // TODO
        break;
      default:
        return state;
    }
  };

  const [shoppingList, dispatch] = useReducer(cartReducer, initialState);

  const addProductToCart = (product) => {
    product.quantity = 1; // Default quantity for new products
    const action = {
      type: "ADD_PRODUCT",
      payload: product,
    };
    dispatch(action);
  };

  const removeProductFromCart = (id) => {
    const action = {
      type: "REMOVE_PRODUCT",
      payload: id,
    };
    dispatch(action);
  };
  const incrementProduct = (id) => {
    const action = {
      type: "INCREMENT_PRODUCT",
      payload: id,
    };
    dispatch(action);
  };
  const decrementProduct = (id) => {
    const action = {
      type: "DECREMENT_PRODUCT",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CartContext.Provider
      value={{
        shoppingList,
        addProductToCart,
        removeProductFromCart,
        incrementProduct,
        decrementProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
