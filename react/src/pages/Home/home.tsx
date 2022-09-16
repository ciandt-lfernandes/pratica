import { useContext } from "react";
import { useNavigate } from "react-router";
import LoginContext from "../../contexts/Login/login.context";
import { Button } from "../../elements/Button/Button";
import { Header } from "../../elements/Header/header";
import { HomeContainer } from "./styles";

export const Home = () => {
  

  return (
    <HomeContainer>
      <Header />
      
    </HomeContainer>
  );
};
