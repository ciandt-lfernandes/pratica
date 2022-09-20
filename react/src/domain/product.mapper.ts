import { ProductDomain } from "./product";

export const productMapper = (product: any): ProductDomain => {
  return { image: product.image, name: product.name, price: product.price };
};
