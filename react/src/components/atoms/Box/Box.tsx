import { BoxContainer } from "./styles";

interface Props {
  children: JSX.Element[] | JSX.Element;
  width?: string;
}

export const Box = ({ children, width }: Props) => {
  return <BoxContainer width={width}>{children}</BoxContainer>;
};
