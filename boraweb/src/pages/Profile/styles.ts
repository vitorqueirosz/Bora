import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;

    padding-top: 40px;
`;

export const TopContent = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    max-width: 1000px;
    margin-bottom: 20px;
    justify-content: space-between;

    h1 {
        display: flex;
        align-self: flex-end;
        color: #4E4E4E;
        padding-left: 30px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;


            a {
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: flex-end;
            text-decoration: none;
            color: #4e4e4e;

            svg {
                margin-right: 8px;
            }
        }
    }

`;

export const Content = styled.div`

    display: flex;
    flex-direction: column;

    min-height: 580px;
    height: 100%;

    h1 {
        color: #4E4E4E;
        font-size: 20px;
        margin-bottom: 16px;
    }

    aside {

        display: flex;
        align-items: center;

        align-self: flex-end;


        button {
        display: flex;
        align-items: center;
        align-self: flex-end;
        border: 0;

        background: #6c63ef;
        text-decoration: none;
        color: #fff;
        width: 260px;
        height: 54px;
        border-radius: 8px;
        margin-top: 24px;

        p {
            text-align: center;
            flex: 1;
        }


        span {
            width: 70px;
            height: 54px;
            display:flex;
            justify-content: center;
            align-items: center;
            background: rgba(0,0,0,0.2);
            border-radius: 8px 0 0 8px;
        }

        svg {
            margin-right: 8px;
        }

        &:hover {
            background: ${shade(0.2, '#6c63ef')};
        }
    }
    }

`;
export const ProfileContent = styled.div`
    background: #B6C1DD;

    padding: 32px;
    width: 1000px;
    max-width: 1000px;

    display: flex;
    justify-content: center;

    border-radius: 8px;


`;
export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;



    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        margin-right: 20px;

        label {
            display: block;
            margin-bottom: 8px;
            color: #fff;

        }


    }

`;
export const InputList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-left: 80px;

    div {
            div {
                background: #f0f0f5;
                margin-top: 4px;
            }

            input {
                color: #6c63ef;
            }

        }

        label {
            font-size: 14px;
            color: #fff;
            display: block;
            margin-top: 8px;
        }

`;
export const InputGrid = styled.div`

    margin-left: 64px;

    div {


    }

`;
