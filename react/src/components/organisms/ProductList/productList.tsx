import { useContext } from "react";
import CartContext from "../../../contexts/Cart/cart.context";
import ProductContext from "../../../contexts/Product/product.context";
import { ProductDomain } from "../../../domain/product";
import { Box } from "../../atoms/Box/Box";
import { Button } from "../../atoms/Button/Button";
import { Product } from "../../molecules/Produto/product";
import { ProductListContainer } from "./styles";

export const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const { getProducts, getProductFromAmount } = useContext(ProductContext);
  const products = getProducts();

  const handleClick = (product: ProductDomain) => {
    getProductFromAmount(product.id);
    addToCart(product);
  };

  return (
    <ProductListContainer>
      {products
        .filter((p) => p.amount )
        .map((p) => (
          <Box width="auto" key={p.name}>
            <Product product={p} />
            <h4>Qtd: {p.amount}</h4>
            <Button value="+" onClick={() => handleClick(p)} />
          </Box>
        ))}
    </ProductListContainer>
  );
};
