import { ILogin } from "../../app/login/login.request";
import { User } from "./user";
import { GetUserByEmail } from "./user.gateway";
import { userMapper } from "./user.mapper";

export interface IDependencies {
  getUserByEmail: GetUserByEmail;
}

export const autenthicate = async (
  dependencies: IDependencies,
  login: ILogin
): Promise<User> => {
  const { getUserByEmail } = dependencies;

  const user = await getUserByEmail(login.email);
  if (user) {
    if (login.email === user.email && login.password === user.password) {
      return userMapper(user);
    }
  }
  return undefined;
};
