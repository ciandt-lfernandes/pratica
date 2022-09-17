import { model, Schema } from "mongoose";

let userSchema = new Schema({
  email: String,
  name: String,
  password: String,
});

module.exports = model("userModel", userSchema, "user");
