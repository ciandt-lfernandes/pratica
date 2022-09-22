import { useContext } from "react";
import CartContext from "../../../contexts/Cart/cart.context";
import ProductContext from "../../../contexts/Product/product.context";
import { ProductDomain } from "../../../domain/product";
import { Box } from "../../atoms/Box/Box";
import { Button } from "../../atoms/Button/Button";
import { Product } from "../../molecules/Produto/product";
import { CartListContainer } from "./styles";

export const CartList = () => {
  const { getCart, removeFromCart } = useContext(CartContext);
  const { refundProductToAmount } = useContext(ProductContext);
  const cart = getCart();

  const handleClick = (product: ProductDomain) => {
    removeFromCart(product);
    refundProductToAmount(product.id);
  };

  return (
    <CartListContainer>
      {cart.items
        .filter((i) => i.amount)
        .map((i) => (
          <Box width="auto" key={i.product.id}>
            <Product product={i.product} />
            <h4>Qtd: {i.amount}</h4>
            <Button value={"-"} onClick={() => handleClick(i.product)} />
          </Box>
        ))}
    </CartListContainer>
  );
};
