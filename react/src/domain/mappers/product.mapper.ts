import { ProductDomain } from "../product";

export const productMapper = (product: any): ProductDomain => {
  return {
    id: product.id,
    image: product.image,
    amount: product.amount,
    name: product.name,
    price: product.price,
  };
};
