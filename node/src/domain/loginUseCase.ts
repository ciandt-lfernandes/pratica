import { ILogin } from "./interfaces/login";

export const autenthicate = (login: ILogin): boolean => {
  if (login.email === "admin" && login.password === "admin") {
    return true;
  }
  return false;
};
