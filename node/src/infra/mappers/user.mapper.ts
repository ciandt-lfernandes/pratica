import { UserModel } from "../interfaces/user.model";

export const userMapper = (user): UserModel => {
  return {
    name: user.name,
    email: user.email,
    password: user.password,
  };
};
