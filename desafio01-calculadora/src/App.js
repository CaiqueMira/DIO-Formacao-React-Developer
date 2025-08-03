import Input from "./components/Input";
import Button from "./components/Button";


import { Container, Content, DisplayContainer, KeypadContainer, Row } from "./styles";
import { useRef, useState } from "react";

const App = () => {

  const [displayValue, setDisplayValue] = useState('0');
  const [displayCalc, setDisplayCalc] = useState('');

  const currentNumber = useRef(0);
  const firstNumber = useRef(0);
  const operation = useRef("");
  const isOperation = useRef(false);
  const operationChange = useRef(false);

  const handleOnClear = () => {
    setDisplayValue('0');
    setDisplayCalc('');
    currentNumber.current = 0;
    firstNumber.current = 0;
    operation.current = "";
    isOperation.current = false;
    operationChange.current = false;
  }

  const setDisplayAndCurrentValue = (value) => {
    if (isOperation.current === false) {      
        if (!isNaN(value)) {          
            currentNumber.current = `${currentNumber.current === 0 ? "" : currentNumber.current}${value}`;
            setDisplayValue(prev => `${prev === '0' ? "" : prev}${value}`);
          } else {
              setDisplayCalc(prev => `${prev === '0' ? "" : prev}${displayValue}${value}`);
          }
    } else {
        if (displayCalc.includes('=') && operation.current !== '=') {
            setDisplayCalc(`${firstNumber.current}${operation.current}`);
        }
        else if (firstNumber.current !== 0 || (firstNumber.current === 0 && currentNumber.current === 0)) {
            if (!isNaN(value)) {
                setDisplayValue(value);
                currentNumber.current = `${currentNumber.current === 0 ? "" : currentNumber.current}${value}`;
                isOperation.current = false;
            }
            if (isOperation.current === true) {
                setDisplayCalc(prev => `${prev === '0' ? "" : prev}${displayValue}${value}`);
            }
        } else {
            setDisplayCalc(prev => `${prev}${displayValue}${operation.current}`);
            setDisplayValue(!isNaN(value) ? value : 0);
            firstNumber.current = !isNaN(value) ? value : 0;
            currentNumber.current = 0;
        }        
      }
  };

  const handleOperation = (operationValue) => {    
    if (operationValue !== '=') {
        if (isOperation.current === false || (operation.current !== operationValue && currentNumber.current !== 0)) {
            if (operation.current !== '' && operation.current !== operationValue) {
                if (operationChange.current === false) {
                    operationChange.current = true;
                    isOperation.current = true;
    
                    const auxValue = operation.current;
                    operation.current = operationValue;
                    operationValue = auxValue;
                    handleOperation(operationValue);
                    return;
                } else {
                    operationChange.current = false;
                    let value;
    
                    switch(operationValue) {
                        case '+':
                            value = Number(firstNumber.current) + Number(currentNumber.current);
                            break;
                        case '-':
                            value = Number(firstNumber.current) - Number(currentNumber.current);
                            break;
                        case '*':
                            value = Number(firstNumber.current) * Number(currentNumber.current);
                            break;
                        case '/':
                            value = Number(firstNumber.current) / Number(currentNumber.current);
                            break;
                        default:
                            break;
                    }
    
                    currentNumber.current = value;
                    firstNumber.current = 0;
                    setDisplayAndCurrentValue(value);
                    return;
                }
            }
            
            if (operation.current === '') {              
                operation.current = operationValue;
            }
    
            isOperation.current = true;
            
            if (firstNumber.current === 0) {
                firstNumber.current = Number(currentNumber.current);
                currentNumber.current = 0;
                setDisplayAndCurrentValue(operationValue);
            } else {   
                let value;
                
                switch(operationValue) {
                    case '+':
                        value = Number(firstNumber.current) + Number(currentNumber.current);
                        break;
                    case '-':
                        value = Number(firstNumber.current) - Number(currentNumber.current);
                        break;
                    case '*':
                        value = Number(firstNumber.current) * Number(currentNumber.current);
                        break;
                    case '/':
                        value = Number(firstNumber.current) / Number(currentNumber.current);
                        break;
                    default:
                        break;
                }
    
                currentNumber.current = value;
                firstNumber.current = 0;
                setDisplayAndCurrentValue(value);
            }
        } else {                        
            if (displayCalc.current !== '' && operation.current !== '=') {
                operation.current = operationValue;
                setDisplayCalc(`${displayCalc.slice(0, displayCalc.length - 1)}${operation.current}`);
            } else {                
                operation.current = operationValue;
                isOperation.current = true;
                setDisplayAndCurrentValue(operationValue);
            }
        }
    } else { 
        if (isOperation.current === true) {
          return ;
        }       
        isOperation.current = true;
        let value;
                
        switch(operation.current) {
            case '+':
                value = Number(firstNumber.current) + Number(currentNumber.current);
                break;
            case '-':
                value = Number(firstNumber.current) - Number(currentNumber.current);
                break;
            case '*':
                value = Number(firstNumber.current) * Number(currentNumber.current);
                break;
            case '/':
                value = Number(firstNumber.current) / Number(currentNumber.current);
                break;
            default:
                break;            
        }        

        firstNumber.current = 0;
        currentNumber.current = value;
        operation.current = '=';
        setDisplayAndCurrentValue(value);
    }
  }

  const handleEraseCurrentNumber = () => {
    if (currentNumber === 0 || isOperation.current === true) return;

    if (String(currentNumber.current).length === 1) {
      currentNumber.current = 0;
    } else {
      currentNumber.current = Number(String(currentNumber.current).slice(0, String(currentNumber.current.length - 1)));
    }
    setDisplayValue(String(currentNumber.current));
  }

  return (
    <Container>
      <Content>
        <DisplayContainer>
            <Input valueCalc={displayCalc} valueDisplay={displayValue} />
        </DisplayContainer>
        <KeypadContainer>
            <div className="keypad">
                <Row>
                    <Button label="*" onClick={() => handleOperation('*')} />
                    <Button label="/" onClick={() => handleOperation('/')} />
                    <Button label="C" onClick={handleOnClear} />
                    <Button label="<X" onClick={handleEraseCurrentNumber} />
                </Row>
                <Row>
                    <Button label="7" onClick={() => setDisplayAndCurrentValue("7")} />
                    <Button label="8" onClick={() => setDisplayAndCurrentValue("8")} />
                    <Button label="9" onClick={() => setDisplayAndCurrentValue("9")} />
                    <Button label="-" onClick={() => handleOperation('-')} />
                </Row>
                <Row>
                    <Button label="4" onClick={() => setDisplayAndCurrentValue("4")} />
                    <Button label="5" onClick={() => setDisplayAndCurrentValue("5")} />
                    <Button label="6" onClick={() => setDisplayAndCurrentValue("6")} />
                    <Button label="+" onClick={() => handleOperation('+')} />
                </Row>
                <Row>
                    <Button label="1" onClick={() => setDisplayAndCurrentValue("1")} />
                    <Button label="2" onClick={() => setDisplayAndCurrentValue("2")} />
                    <Button label="3" onClick={() => setDisplayAndCurrentValue("3")} />
                    <Button label="="  onClick={() => handleOperation('=')}/>
                </Row>
                <Row>
                    <Button className="last" label="0" onClick={() => setDisplayAndCurrentValue("0")} />
                </Row>
            </div>
        </KeypadContainer>
      </Content>
    </Container>
  );
}

export default App;
