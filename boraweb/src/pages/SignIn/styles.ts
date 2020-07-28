import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import background from '../../assets/background3.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h1 {
        color: #6C63FF;
        margin-right: 16px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 700px;
    padding: 32px;
    justify-content: center;

`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px)
    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto;

    animation: ${appearFromLeft} 1s;

    form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 340px;
    margin: auto;

    h1 {
        color: #3B455F;
        max-width: 100px;
        margin-bottom: 16px;
    }

    a {
        text-decoration: none;
        color: #838BA0;
        display: flex;
        justify-content: center;
        margin-top: 24px;

        &:hover {
            color: ${shade(0.2, '#838BA0')}
        }
    }
    }

    a {
        text-decoration: none;
        color: #6C63FF;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
        font-weight: 500;

        &:hover {
            color: ${shade(0.2, '#6c63ff')}
        }

        svg {
            margin-right: 16px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${background}) no-repeat center;

    background-size: cover;
`;
