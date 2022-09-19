import { UserModel } from "../../infra/interfaces/user.model";
import { User } from "../interfaces/user";

export const userMapper = (userModel: UserModel): User => {
  return { name: userModel.name, email: userModel.email };
};
