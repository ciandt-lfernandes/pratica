import { GetUserByEmail } from "../domain/interfaces/user.gateway";
import { connectMongo } from "./connect.mongoose";
import { UserModel } from "./interfaces/user.model";

export const getUserByEmail: GetUserByEmail = async (emailParameter) => {
  try {
    connectMongo();
    let userModel = require("./schema/user.schema");
    const result = await userModel.findOne({ email: emailParameter });
    const user: UserModel = {
      name: result.name,
      email: result.email,
      password: result.password,
    };
    return user;
  } catch (error) {
    console.log(error);
  }
};
