import { Header } from "../../elements/Header/header";
import { ListaProdutos } from "../Produtos/ListaProdutos/listaprodutos";
import { HomeContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <ListaProdutos />
    </HomeContainer>
  );
};
