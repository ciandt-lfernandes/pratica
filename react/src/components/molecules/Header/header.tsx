import { useContext } from "react";
import { useNavigate } from "react-router";
import LoginContext from "../../../contexts/Login/login.context";
import { Button } from "../../atoms/Button/Button";
import { HeaderContainer } from "./styles";

export const Header = () => {
  const { logout, getUser } = useContext(LoginContext);
  const navigate = useNavigate();
  const user = getUser();

  const handleClickLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <h3>{user ? `Bem vindo ${user.name}` : ""}</h3>
      <Button value="logout" width="100" onClick={handleClickLogout}></Button>
    </HeaderContainer>
  );
};
