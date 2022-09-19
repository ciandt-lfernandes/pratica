import { model, Schema } from "mongoose";

export interface UserEntity {
  email: string;
  name: string;
  password: string;
}

let userSchema = new Schema({
  email: String,
  name: String,
  password: String,
});

module.exports = model("userModel", userSchema, "user");
