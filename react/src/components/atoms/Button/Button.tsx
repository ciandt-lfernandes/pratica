import { ButtonContainer, InputButton } from "./styles";

interface Props {
  value: string;
  width?: string;
  onClick?: () => void;
}

export const Button = ({ value, width, onClick }: Props) => {
  return (
    <ButtonContainer>
      <InputButton
        type="button"
        width={width}
        value={value}
        onClick={onClick}
      />
    </ButtonContainer>
  );
};
