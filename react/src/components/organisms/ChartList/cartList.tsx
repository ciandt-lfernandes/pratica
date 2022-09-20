import { useContext } from "react";
import CartContext from "../../../contexts/Cart/cart.context";
import { ProductDomain } from "../../../domain/product";
import { Box } from "../../atoms/Box/Box";
import { Button } from "../../atoms/Button/Button";
import { Product } from "../../molecules/Produto/product";
import { CartListContainer } from "./styles";

export const CartList = () => {
  const { getCart, removeFromCart } = useContext(CartContext);
  const cart = getCart();

  const handleClick = (product: ProductDomain) => {
    removeFromCart(product);
  };

  return (
    <CartListContainer>
      {cart.map((p) => (
        <Box width="30">
          <Product product={p} />
          <Button value={"-"} onClick={() => handleClick(p)} />
        </Box>
      ))}
    </CartListContainer>
  );
};
