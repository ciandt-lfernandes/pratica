import { ProductModel } from "../interfaces/product.model";
import { ProductEntity } from "../repositories/schema/product.schema";

const productMapper = (product: ProductEntity): ProductModel => {
  return {
    name: product.name,
    image: product.image,
    price: product.price,
  };
};

export { productMapper };
