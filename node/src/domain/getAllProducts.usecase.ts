import { GetAllProducts } from "./interfaces/gateways/product.gateway";
import { Product } from "./interfaces/product";
import { productMapper } from "./mappers/product.mapper";

export interface IDependencies {
  repository: GetAllProducts;
}

export const allProducts = async (
  dependencies: IDependencies
): Promise<Array<Product>> => {
  const { repository: getAllProducts } = dependencies;

  const products = await getAllProducts();

  return products.map((p) => productMapper(p));
};
