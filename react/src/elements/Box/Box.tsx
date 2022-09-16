import { BoxContainer } from "./styles";

interface Props {
  children: JSX.Element;
}

export const Box = ({ children }: Props) => {
  return <BoxContainer>{children}</BoxContainer>;
};
