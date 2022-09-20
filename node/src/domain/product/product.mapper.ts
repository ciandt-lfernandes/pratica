import { ProductModel } from "../../infra/interfaces/product.model";
import { IProduct } from "./product";

export const productMapper = (productModel: ProductModel): IProduct => {
  return {
    name: productModel.name,
    image: productModel.image,
    price: productModel.price,
  };
};
