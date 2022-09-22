import { useContext } from "react";
import { useNavigate } from "react-router";
import CartContext from "../../../contexts/Cart/cart.context";
import LoginContext from "../../../contexts/Login/login.context";
import { Button } from "../../atoms/Button/Button";
import { HeaderContainer } from "./styles";

export const Header = () => {
  const { logout, getUser } = useContext(LoginContext);
  const { getCart } = useContext(CartContext);
  const navigate = useNavigate();
  const user = getUser();
  const cart = getCart();

  const handleClickLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <h3>{user ? `Bem vindo ${user.name}` : ""}</h3>
      <h3>{cart ? `Carrinho: ${cart.items ? cart.items.length : 0}` : ""}</h3>
      <Button
        id="logout"
        value="logout"
        width="100"
        onClick={handleClickLogout}
      ></Button>
    </HeaderContainer>
  );
};
