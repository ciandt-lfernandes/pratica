import { Product } from "../product";

type GetAllProducts = () => Promise<Array<Product>>;

export { GetAllProducts };
