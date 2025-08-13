import {CartContext} from './CartContext';

export const CartProvider = ({children}) => {
  return (
    <CartContext.Provider>
        {children}
    </CartContext.Provider>
  )
};

