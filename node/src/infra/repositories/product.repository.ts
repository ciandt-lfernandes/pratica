import { GetAllProducts } from "../../domain/product/product.gateway";
import { connectMongo } from "./connect.mongoose";
import { productMapper } from "../mappers/product.mapper";

const productModel = require("./schema/product.schema");
connectMongo();

export const getAllProductsRepository: GetAllProducts = async () => {
  try {
    const result = await productModel.find({});
    return result.map((p) => productMapper(p._doc));
  } catch (error) {
    console.log(error);
  }
};
