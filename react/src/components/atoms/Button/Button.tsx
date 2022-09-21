import { ButtonContainer, InputButton } from "./styles";

interface Props {
  id?: string;
  value: string;
  width?: string;
  onClick?: () => void;
}

export const Button = ({ id, value, width, onClick }: Props) => {
  return (
    <ButtonContainer>
      <InputButton
        id={id}
        type="button"
        width={width}
        value={value}
        onClick={onClick}
      />
    </ButtonContainer>
  );
};
