import styled from 'styled-components';

export const InputContainer = styled.div`

    width: 85%;
    box-shadow: inset 8px 8px 15px #1A1E21, inset -8px -8px 15px #464B4F;
    border-radius: 5px;

    input {
        width: 100%;
        height: 37.5px;
        background: transparent;
        color: white;
        border: 0;
        padding: 0 10px;
        text-align: right;
        box-sizing: border-box;
    

        font-size: 24px;
        font-family: 'Roboto';

        &:first-child {
            font-size: 16px;
            color: #ffffff8a;
        }
    }
`