import { remove } from "lodash";
import { createContext, useState } from "react";
import { Cart } from "../../domain/cart";
import { ProductCart, ProductDomain } from "../../domain/product";

export interface Context {
  addToCart: (product: ProductCart) => void;
  removeFromCart: (product: ProductCart) => void;
  getCart: () => Cart;
}
const CartContext = createContext<Context>({} as Context);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<Cart>({} as Cart);

  const addToCart = (product: ProductDomain) => {
    if (!cart.items) {
      setCart({ items: [{ product, amount: 1 }] });
    } else {
      const productCart = cart.items.find((i) => i.product.id === product.id);
      if (productCart) {
        productCart.amount++;
      } else {
        cart.items.push({
          product: product,
          amount: 1,
        });
      }
      setCart({ ...cart });
    }
  };

  const removeFromCart = (product: ProductCart) => {
    const productCart = cart.items.find((i) => i.product.id === product.id);
    if (productCart) {
      productCart.amount--;
      remove(cart.items, (i) => i.amount === 0);
    }
    setCart({ ...cart });
  };

  const getCart = () => {
    return { ...cart };
  };

  return (
    <CartContext.Provider value={{ addToCart, getCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
