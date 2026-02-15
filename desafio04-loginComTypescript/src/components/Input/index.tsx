import { InputContainer, ErrorMessage } from "./styles";
import { IInputProps } from "././types";
import { Controller } from "react-hook-form";

const Input = ({ control, name, errorMessage, isTouched, ...rest }: IInputProps) => {
  return (
    <>
      <InputContainer>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <input
              {...rest}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              ref={ref}
            />
          )}
        />
      </InputContainer>
      {isTouched && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default Input;
