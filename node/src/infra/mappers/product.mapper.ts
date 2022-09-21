import { ProductModel } from "../interfaces/product.model";
import { ProductEntity } from "../repositories/schema/product.schema";

const productMapper = (product: ProductEntity): ProductModel => {
  if (product) {
    return {
      id: product._id,
      name: product.name,
      amount: product.amount,
      image: product.image,
      price: product.price,
    };
  }
  return null;
};

export { productMapper };
