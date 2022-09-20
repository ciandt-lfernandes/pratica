import { useNavigate } from "react-router";
import { Button } from "../../components/atoms/Button/Button";
import { Header } from "../../components/molecules/Header/header";
import { ChartList } from "../../components/organisms/ChartList/chartList";
import { ChartContainer } from "./styles";

export const Chart = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <ChartContainer>
      <Header />
      <ChartList />

      <Button value={"Go to home"} onClick={handleClick} />
    </ChartContainer>
  );
};
