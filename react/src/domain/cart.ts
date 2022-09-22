import { ProductDomain } from "./product";

export interface Cart {
  items: [
    {
      amount: number;
      product: ProductDomain;
    }
  ];
}
