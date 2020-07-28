import styled, { css } from 'styled-components';

interface InputProps {
    isFocused: boolean;
}

export const Container = styled.div<InputProps>`

    background: #fff;
    border-radius: 8px;
    padding: 16px;
    width: 260px;
    border: 2px solid transparent;
    color: #3B455F;

    display: flex;
    align-items: center;

    input {
        background: transparent;
        border: 0;
        color: #6c63ef;
        width: 100%;
        cursor: pointer;

        /* display: flex;
        justify-content: flex-start; */
    }

    input[type=date] {
        color: #6c63ef;
    }

    ${(props) => props.isFocused && css`
        border-color: #6c63ef;
    `}


`;
