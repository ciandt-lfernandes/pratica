import { useContext } from "react";
import { useNavigate } from "react-router";
import LoginContext from "../../contexts/Login/login.context";
import { Button } from "../../elements/Button/Button";

export const Home = () => {
  const { isLogged, logout } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleClickTeste = () => {
    navigate("/teste");
  };

  const handleClickLogout = () => {
    logout();
    navigate("/login");
  };

  if (isLogged()) {
    return (
      <div>
        <h1>Logado</h1>
        <Button value="teste" width="30" onClick={handleClickTeste}></Button>
        <Button value="logout" width="30" onClick={handleClickLogout}></Button>
      </div>
    );
  }
  return <h1>NÃO Logado</h1>;
};
