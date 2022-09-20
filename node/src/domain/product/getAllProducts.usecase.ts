import { GetAllProducts } from "./product.gateway";
import { IProduct } from "./product";
import { productMapper } from "./product.mapper";

export interface IDependencies {
  repository: GetAllProducts;
}

export const allProducts = async (
  dependencies: IDependencies
): Promise<Array<IProduct>> => {
  const { repository: getAllProducts } = dependencies;

  const products = await getAllProducts();

  return products.map((p) => productMapper(p));
};
