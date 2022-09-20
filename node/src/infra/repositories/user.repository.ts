import { GetUserByEmail } from "../../domain/user/user.gateway";
import { userMapper } from "../mappers/user.mapper";
import { connectMongo } from "./connect.mongoose";

const userModel = require("./schema/user.schema");
connectMongo();

export const getUserByEmail: GetUserByEmail = async (emailParameter) => {
  try {
    const result = await userModel.findOne({ email: emailParameter });
    return userMapper(result);
  } catch (error) {
    console.log(error);
  }
};
