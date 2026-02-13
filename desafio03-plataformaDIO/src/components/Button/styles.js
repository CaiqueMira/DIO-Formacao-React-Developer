import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    transition: opacity 0.2s;
    font-size: 18px;
    border: none;
    
    ${({variant}) => variant !== 'primary' && css`
        min-width: 167px;
        max-width: 280px;
        height: 33px;
        
        background: #E4105D;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }

    `}
`
