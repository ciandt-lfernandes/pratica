import { model, Schema } from "mongoose";

export interface ProductEntity {
  _id: string;
  name: string;
  image: string;
  price: number;
  amount: number;
}

let productSchema = new Schema({
  _id: String,
  name: String,
  image: String,
  price: Number,
  amount: Number,
});

module.exports = model("productModel", productSchema, "product");
