import { useContext } from "react";
import { useNavigate } from "react-router";
import ChartContext from "../../../contexts/Login/chart.context";
import LoginContext from "../../../contexts/Login/login.context";
import { Button } from "../../atoms/Button/Button";
import { HeaderContainer } from "./styles";

export const Header = () => {
  const { logout, getUser } = useContext(LoginContext);
  const { getChart } = useContext(ChartContext);
  const navigate = useNavigate();
  const user = getUser();
  const chart = getChart();

  const handleClickLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <h3>{user ? `Bem vindo ${user.name}` : ""}</h3>
      <h3>{chart ? `Carrinho ${chart.length}` : ""}</h3>
      <Button value="logout" width="100" onClick={handleClickLogout}></Button>
    </HeaderContainer>
  );
};
