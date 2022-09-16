import { Banana as Input, TextBoxContainer } from "./styles";
import "./styles.ts";

interface ITextbox {
  id: string;
  label?: string;
  placeholder?: string;
  value?: string;
  handleChange: (event: any) => void;
  type?: "text" | "password";
}

export const Textbox = ({
  id,
  label,
  placeholder,
  type,
  value,
  handleChange,
}: ITextbox) => {
  return (
    <TextBoxContainer>
      <label htmlFor={id}>{label}</label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </TextBoxContainer>
  );
};
