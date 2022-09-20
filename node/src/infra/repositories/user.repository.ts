import { GetUserByEmail } from "../../domain/user/user.gateway";
import { connectMongo } from "../connect.mongoose";
import { userMapper } from "../mappers/user.mapper";

const userModel = require("./schema/user.schema");
connectMongo();

export const getUserByEmail: GetUserByEmail = async (emailParameter) => {
  try {
    const result = await userModel.findOne({ email: emailParameter });
    return result ? userMapper(result) : null;
  } catch (error) {
    console.log(error);
  }
};
