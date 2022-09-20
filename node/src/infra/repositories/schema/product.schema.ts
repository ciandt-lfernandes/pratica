import { model, Schema } from "mongoose";

export interface ProductEntity {
  _id: string;
  name: string;
  image: string;
  price: number;
}

let productSchema = new Schema({
  _id: String,
  name: String,
  image: String,
  prince: Number,
});

module.exports = model("productModel", productSchema, "product");
