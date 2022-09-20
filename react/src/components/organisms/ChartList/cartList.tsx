import { useContext } from "react";
import CartContext from "../../../contexts/Cart/cart.context";
import { Box } from "../../atoms/Box/Box";
import { Product } from "../../molecules/Produto/product";
import { CartListContainer } from "./styles";

export const CartList = () => {
  const { getCart } = useContext(CartContext);
  const cart = getCart();
  return (
    <CartListContainer>
      {cart.map((p) => (
        <Box width="30">
          <Product product={p} />
        </Box>
      ))}
    </CartListContainer>
  );
};
