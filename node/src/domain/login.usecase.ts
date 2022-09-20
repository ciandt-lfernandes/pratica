import { GetUserByEmail } from "./interfaces/gateways/user.gateway";
import { ILogin } from "./interfaces/login";
import { User } from "./interfaces/user";
import { userMapper } from "./mappers/user.mapper";

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
