import Axios from "axios";
import { ProductDomain } from "../../domain/product";
import { productMapper } from "../../domain/product.mapper";

export const listAllproducts = async () => {
  try {
    const { data } = await Axios.get<ProductDomain[]>(
      `http://localhost:3001/products`
    );
    return data.map((p) => productMapper(p));
  } catch (error) {
    console.error(error);
    throw error;
  }
};
