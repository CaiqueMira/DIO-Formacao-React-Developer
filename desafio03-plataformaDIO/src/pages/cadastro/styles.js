import styled, { css } from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 380px;
    line-height: 44px;

    color: #FFFFFF;
`

export const Wrapper = styled.div`
    max-width: 374px;
`

export const Text = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 34px;
    line-height: 25px;

    ${({variant}) => variant !== 'margin-bottom' && css`
        margin-bottom: 0;
        margin-top: 42px;

    `}
`

export const TextMinor = styled.p`
    font-family: 'Open Sans';
    font-style: Bold;
    font-weight: 700;
    font-size: 14px;
    margin-top: 20px;
    line-height: 14px;

    span.login {
        color: #23DD7A;
        cursor: pointer;
    }
`

