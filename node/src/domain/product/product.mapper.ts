import { ProductModel } from "../../infra/interfaces/product.model";
import { IProduct } from "./product";

export const productMapper = (productModel: ProductModel): IProduct => {
  return {
    id: productModel.id,
    name: productModel.name,
    image: productModel.image,
    price: productModel.price,
  };
};
