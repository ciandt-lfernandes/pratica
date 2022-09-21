import { useContext, useEffect, useState } from "react";
import CartContext from "../../../contexts/Cart/cart.context";
import { ProductDomain } from "../../../domain/product";
import { listAllproducts } from "../../../services/products/listAllProducts.service";
import { Box } from "../../atoms/Box/Box";
import { Button } from "../../atoms/Button/Button";
import { Product } from "../../molecules/Produto/product";
import { ProductListContainer } from "./styles";

export const ProductList = () => {
  const [products, setProducts] = useState<ProductDomain[]>([]);
  const { addToCart } = useContext(CartContext);

  const loadProducts = async () => {
    setProducts(await listAllproducts());
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductListContainer>
      {products.map((p) => (
        <Box width="auto" key={p.name}>
          <Product product={p} />
          <Button value="+" onClick={() => addToCart(p)} />
        </Box>
      ))}
    </ProductListContainer>
  );
};
