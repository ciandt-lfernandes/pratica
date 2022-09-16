import { useContext } from "react";
import { useNavigate } from "react-router";
import LoginContext from "../../contexts/Login/login.context";
import { Button } from "../Button/Button";
import { HeaderContainer } from "./styles";

export const Header = () => {
  const { logout } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleClickLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <Button value="logout" width="100" onClick={handleClickLogout}></Button>
    </HeaderContainer>
  );
};
