import { useEffect, useState } from "react";
import { ProductDomain } from "../../../domain/product";
import { listAllproducts } from "../../../services/products/listAllProducts.service";
import { Box } from "../../atoms/Box/Box";
import { Product } from "../../molecules/Produto/product";
import { ProductListContainer } from "./styles";

export const ProductList = () => {
  const [products, setProducts] = useState<ProductDomain[]>([]);

  const loadProducts = async () => {
    setProducts(await listAllproducts());
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductListContainer>
      {products.map((p) => (
        <Box key={p.name}>
          <Product product={p} />
        </Box>
      ))}
    </ProductListContainer>
  );
};
