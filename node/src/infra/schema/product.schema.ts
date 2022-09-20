import { model, Schema } from "mongoose";

export interface ProductEntity {
  name: string;
  image: string;
  price: number;
}

let productSchema = new Schema({
  name: String,
  image: String,
  prince: Number,
});

module.exports = model("productModel", productSchema, "product");
