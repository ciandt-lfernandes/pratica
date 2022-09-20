import { ProductModel } from "../../infra/interfaces/product.model";
import { Product } from "../interfaces/product";

export const productMapper = (productModel: ProductModel): Product => {
  return {
    name: productModel.name,
    image: productModel.image,
    price: productModel.price,
  };
};
