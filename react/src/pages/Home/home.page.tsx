import { Header } from "../../components/molecules/Header/header";
import { ProductList } from "../../components/organisms/ProductList/productList";
import { HomeContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <ProductList />
    </HomeContainer>
  );
};
