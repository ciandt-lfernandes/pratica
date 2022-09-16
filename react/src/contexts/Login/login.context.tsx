import { createContext } from "react";

export interface Context {
  isLogged: () => boolean;
  login: () => void;
  logout: () => void;
}
const LoginContext = createContext<Context>({} as Context);

export const LoginProvider = ({ children }: any) => {
  const isLogged = () => {
    return localStorage.getItem("authenticated") === "true";
  };

  const login = () => {
    localStorage.setItem("authenticated", "true");
  };

  const logout = () => {
    localStorage.setItem("authenticated", "false");
  };

  return (
    <LoginContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
