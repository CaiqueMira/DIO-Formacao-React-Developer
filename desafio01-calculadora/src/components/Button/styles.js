import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 70px;
    height: 70px;
    border-radius: 15px;
    background: #34393F;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    box-shadow: 5px 5px 15px #2c2c2c, -2px -2px 15px #656565;
    transition: all 0.2s ease-in-out;
    color: white;
    border: 1px solid #353535;

    &:active {
        box-shadow: inset 8px 8px 15px #2c2c2c, inset -8px -8px 15px #656565;
    }
`;