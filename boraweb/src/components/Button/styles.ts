import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    display: flex;
    align-items: center;
    background: #6C63FF;
    border: 0;
    height: 56px;
    border-radius: 10px;
    margin-top: 16px;
    color: #fff;

    font-weight: 500;
    transition: background 0.2s;


    span {
        background: rgba(0,0,0, 0.3);
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 56px;
        border-radius: 10px 0 0 10px;

    }

    strong {
        text-align: center;
        display: flex;
        justify-content: center;
        flex: 1;

    }

    &:hover {
        background: ${shade(0.2, '#6C63FF')};
    }
`;
