export interface ProductDomain {
  id: string;
  name: string;
  price: number;
  amount: number;
  image: string;
}

export interface ProductCart extends ProductDomain {
  idCart?: string;
}
