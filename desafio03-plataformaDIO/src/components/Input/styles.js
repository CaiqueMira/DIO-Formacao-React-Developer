import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;    
`

export const IconContainer = styled.div`
    display: flex;
    color: #8647AD;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    border: 0;
    height: 30px;
    width: 100%;
    padding-left: 10px;
    font-size: 18px;

    &::placeholder {
        font-size: 18px;
    }

    &:focus-visible {
        outline: none;
    }
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin: 5px 0;
`