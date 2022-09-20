import { GetAllProducts } from "../../domain/product/product.gateway";
import { productMapper } from "../mappers/product.mapper";
import { connectMongo } from "./connect.mongoose";

const productModel = require("./schema/product.schema");
connectMongo();

export const getAllProductsRepository: GetAllProducts = async () => {
  try {
    const result = await productModel.find({});
    return result.map((p) => productMapper(p._doc));
  } catch (error) {
    console.error(error);
    throw error;
  }
};
