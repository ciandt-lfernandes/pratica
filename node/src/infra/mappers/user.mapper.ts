import { UserModel } from "../interfaces/user.model";
import { UserEntity } from "../repositories/schema/user.schema";

const userMapper = (user: UserEntity): UserModel => {
  if (user) {
    return {
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }
  return null;
};

export { userMapper };
