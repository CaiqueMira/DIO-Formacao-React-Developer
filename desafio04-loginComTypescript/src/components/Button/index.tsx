import { ButtonContainer } from "./styles";
import type { IButtonProps } from "./types";

const Button = ({ title, onClick, ...rest}: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} {...rest}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
