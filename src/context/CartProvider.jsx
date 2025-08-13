import { useReducer } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const initialState = [];
  const [shoppingList, dispatch] = useReducer(
    shoppingListReducer,
    initialState
  );

  const addProductToCart = (product) => {
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

  const cartReducer = (state, action = {}) => {
    switch (action.type) {
      case "ADD_PRODUCT":
        return [...state, action.payload];
      case "REMOVE_PRODUCT":
        return state.filter((product) => product.id !== action.pauload);
      case "INCREMENT_PRODUCT": // TODO
        break;
      case "DECREMENT_PRODUCT": // TODO
        break;
      default:
        return state;
    }
  };
  return (
    <CartContext.Provider value={{ products }}>{children}</CartContext.Provider>
  );
};
