import { createContext, useState } from "react";
import { ProductDomain } from "../../domain/product";

export interface Context {
  addChart: (product: ProductDomain) => void;
  getChart: () => ProductDomain[];
}
const ChartContext = createContext<Context>({} as Context);

export const ChartProvider = ({ children }: any) => {
  const [chart, setChart] = useState<ProductDomain[]>([]);

  const addChart = (product: ProductDomain) => setChart([...chart, product]);
  const getChart = () => chart;

  return (
    <ChartContext.Provider value={{ addChart, getChart }}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartContext;
