import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #282C2F;

    display: flex;
    align-items: center;
    justify-content: center;
`    
    
export const Content = styled.div`
    background-color: #34393F;
    width: 50%;
    max-width: 500px;
    min-height: 350px;
    min-width: 500px;
    border-radius: 20px;
    box-shadow: 5px 5px 15px #212020, -2px -2px 15px #676161;
    border: 1px solid #393939;
`

export const DisplayContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
`

export const KeypadContainer = styled.div`
    display: flex;
    justify-content: center;

    div.keypad {
        width: 80%;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    &:last-child {
        justify-content: center;
    }

    button:last-child:not(button:first-child) {
        background: #3f2654;
        color: #c65dc3;
    }

    &:first-child button:not(button:last-child) {
        background: #262626 ;
        color: white;
    }

    &:last-child button {
    }
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`