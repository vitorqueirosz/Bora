import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #B6C1DD;

    border-radius: 10px;
    padding: 16px;
    width: 100%;

    border: 2px solid #f0f0f5;
    color: #3B455F;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 4px;
    }

    ${(props) => props.isErrored && css`
        border-color: #c53030;
    `}

    ${(props) => props.isFocused && css`
        color: #6C63FF;
        border-color: #6C63FF;
    `}
    ${(props) => props.isFilled && css`
        color: #6C63FF;
    `}



    input {
        background: transparent;
        flex: 1;
        border: 0;
        color: #4E4E4E;

    &::placeholder {
        color: #4E4E4E;
    }

}
    svg {
        margin-right: 16px;
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin-right: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
