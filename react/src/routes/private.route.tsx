import { useContext } from "react";
import { Navigate } from "react-router";
import LoginContext from "../contexts/Login/login.context";

interface Props {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
  const { isLogged } = useContext(LoginContext);
  return isLogged() ? <>{children}</> : <Navigate to="/login" />;
};
