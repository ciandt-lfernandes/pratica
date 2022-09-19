import { UserModel } from "../interfaces/user.model";
import { UserEntity } from "../schema/user.schema";

const userMapper = (user: UserEntity): UserModel => {
  return {
    name: user.name,
    email: user.email,
    password: user.password,
  };
};

export { userMapper };
