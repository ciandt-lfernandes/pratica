import { createContext } from "react";
import { User } from "../../domain/user";

export interface Context {
  isLogged: () => boolean;
  login: (user: User) => void;
  getUser: () => User | undefined;
  logout: () => void;
}
const LoginContext = createContext<Context>({} as Context);

export const LoginProvider = ({ children }: any) => {
  const getUser = () => {
    const storageUser = localStorage.getItem("user");
    if (storageUser) {
      const jsonUser = JSON.parse(storageUser);
      const user: User = { name: jsonUser.name, email: jsonUser.email };
      return user;
    }

    return undefined;
  };

  const isLogged = () => {
    return localStorage.getItem("authenticated") === "true";
  };

  const login = (user: User) => {
    localStorage.setItem("authenticated", "true");
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    localStorage.setItem("authenticated", "false");
  };

  return (
    <LoginContext.Provider value={{ isLogged, login, getUser, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
