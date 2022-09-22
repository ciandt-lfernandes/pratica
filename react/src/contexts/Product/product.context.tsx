import { createContext, useEffect, useState } from "react";
import { ProductDomain } from "../../domain/product";
import { listAllproducts } from "../../services/products/listAllProducts.service";

export interface Context {
  getProducts: () => ProductDomain[];
  getProductFromAmount: (id: string) => void;
  refundProductToAmount: (id: string) => void;
}
const ProductContext = createContext<Context>({} as Context);

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<ProductDomain[]>([]);

  const loadProducts = async () => {
    setProducts(await listAllproducts());
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const getProducts = () => products;
  const getProductFromAmount = (id: string) => {
    products.filter((p) => p.id === id).forEach((p) => --p.amount);
    setProducts([...products]);
  };

  const refundProductToAmount = (id: string) => {
    products.filter((p) => p.id === id).forEach((p) => ++p.amount);
    setProducts([...products]);
  };

  return (
    <ProductContext.Provider
      value={{ getProducts, getProductFromAmount, refundProductToAmount }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
