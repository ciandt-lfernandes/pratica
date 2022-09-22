import { useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button/Button";
import { Header } from "../../components/molecules/Header/header";
import { CartList } from "../../components/organisms/CartList/cartList";
import { CartContainer } from "./styles";

export const Cart = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <CartContainer>
      <Header />
      <CartList />

      <Button value={"Go to home"} onClick={handleClick} />
    </CartContainer>
  );
};
