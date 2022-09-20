import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProductCart } from "../../domain/product";

export interface Context {
  addToCart: (product: ProductCart) => void;
  removeFromCart: (product: ProductCart) => void;
  getCart: () => ProductCart[];
}
const CartContext = createContext<Context>({} as Context);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<ProductCart[]>([]);

  const addToCart = (product: ProductCart) => {
    setCart([...cart, { ...product, idCart: uuidv4() }]);
  };

  const removeFromCart = (product: ProductCart) =>
    setCart(cart.filter((p) => p.idCart !== product.idCart));

  const getCart = () => {
    return cart;
  };

  return (
    <CartContext.Provider value={{ addToCart, getCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
