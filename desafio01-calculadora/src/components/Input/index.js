import { InputContainer } from "./styles";

const Input = ({valueDisplay, valueCalc}) => {
  return (
    <InputContainer>
        <input disabled value={valueCalc}/>
        <input disabled value={valueDisplay} />
    </InputContainer>
  )
}

export default Input;
