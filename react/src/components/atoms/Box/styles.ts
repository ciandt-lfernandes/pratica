import styled from "styled-components";

interface IProps {
  width?: string;
}

export const BoxContainer = styled.div<IProps>`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  ${(props) => (props.width ? "width:" + props.width : "auto")}%;
  box-shadow: 4px 4px 15px 0px;
  background-color: mintcream;
`;
