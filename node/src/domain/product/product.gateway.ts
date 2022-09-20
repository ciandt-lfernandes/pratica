import { IProduct } from "./product";

type GetAllProducts = () => Promise<Array<IProduct>>;

export { GetAllProducts };
