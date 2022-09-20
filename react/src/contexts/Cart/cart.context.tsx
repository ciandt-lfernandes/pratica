import { createContext, useState } from "react";
import { ProductDomain } from "../../domain/product";

export interface Context {
  addCart: (product: ProductDomain) => void;
  getCart: () => ProductDomain[];
}
const CartContext = createContext<Context>({} as Context);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<ProductDomain[]>([]);

  const addToCart = (product: ProductDomain) => setCart([...cart, product]);
  const removeFromCart = (product: ProductDomain) =>
    setCart([...cart, product]);
  const getCart = () => cart;

  return (
    <CartContext.Provider value={{ addCart: addToCart, getCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
