import { useEffect, useState } from "react";
import { ProductDomain } from "../../../domain/product";
import { Box } from "../../../elements/Box/Box";
import { listAllproducts } from "../../../services/products/listAllProducts.service";
import { Product } from "../Produto/product";
import { ListaProdutosContainer } from "./styles";

export const ListaProdutos = () => {
  const [products, setProducts] = useState<ProductDomain[]>([]);

  const loadProducts = async () => {
    setProducts(await listAllproducts());
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ListaProdutosContainer>
      {products.map((p) => (
        <Box key={p.name}>
          <Product product={p} />
        </Box>
      ))}
    </ListaProdutosContainer>
  );
};
