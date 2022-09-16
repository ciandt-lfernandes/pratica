import { ILogin } from "./interfaces/login";
import { User } from "./interfaces/user";

export const autenthicate = (login: ILogin): User => {
  if (login.email === "admin" && login.password === "admin") {
    return { name: "Luiz", email: "admin@admin.com" };
  }
  return undefined;
};
