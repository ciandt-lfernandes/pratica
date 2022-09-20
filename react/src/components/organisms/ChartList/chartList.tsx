import { useContext } from "react";
import ChartContext from "../../../contexts/Login/chart.context";
import { Box } from "../../atoms/Box/Box";
import { Product } from "../../molecules/Produto/product";
import { ChartListContainer } from "./styles";

export const ChartList = () => {
  const { getChart } = useContext(ChartContext);
  const chart = getChart();
  return (
    <ChartListContainer>
      {chart.map((p) => (
        <Box>
          <Product product={p} />
        </Box>
      ))}
    </ChartListContainer>
  );
};
