import { ProductDomain } from "../../../domain/product";
import { ProductContainer } from "./styles";

interface Props {
  product: ProductDomain;
}

export const Product = ({ product }: Props) => {
  return (
    <ProductContainer>
      <img width={100} height={100} src={product.image} alt=""></img>
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>
    </ProductContainer>
  );
};
