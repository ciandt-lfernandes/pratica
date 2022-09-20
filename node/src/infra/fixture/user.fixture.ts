import { UserModel } from "../interfaces/user.model";
import { UserEntity } from "../repositories/schema/user.schema";

export const userEntity: UserEntity = {
  name: "name",
  email: "email@email.com",
  password: "pass",
};

export const userModel: UserModel = {
  name: "name",
  email: "email@email.com",
  password: "pass",
};
