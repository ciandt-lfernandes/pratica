import { useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button/Button";
import { Header } from "../../components/molecules/Header/header";
import { ProductList } from "../../components/organisms/ProductList/productList";
import { HomeContainer } from "./styles";

export const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/chart");
  };

  return (
    <HomeContainer>
      <Header />
      <ProductList />
      <Button value={"Go to chart"} onClick={handleClick} />
    </HomeContainer>
  );
};
