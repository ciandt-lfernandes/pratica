import { getUserByEmail } from "../infra/user.repository";
import { ILogin } from "./interfaces/login";
import { User } from "./interfaces/user";

export const autenthicate = async (login: ILogin): Promise<User> => {
  const user = await getUserByEmail(login.email);
  if (user) {
    if (login.email === user.email && login.password === user.password) {
      return { name: user.name, email: user.email };
    }
  }
  return undefined;
};
