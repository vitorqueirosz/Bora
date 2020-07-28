import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1030px;
    margin-bottom: 32px;

    h1 {
        font-size: 32px;
        font-weight: 500;
        color: #4E4E4E;

    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #4E4E4E;

        svg {
            color: #6C63EF;
            margin-right: 8px;
        }
    }
`;

export const AsideContent = styled.div`

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    background: #6C63EF;
    padding: 32px 16px;
    border-radius: 0 8px 8px 0;

    width: 100%;
    max-width: 283px;
    box-shadow: 1px 2px 2px  1px rgba(0,0,0,0.3);

    aside {
        display: flex;
        /* align-self: flex-end; */
        flex-direction: column;

        span {
            margin-top: 8px;
        }

    }
`;
export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 32px;
    width: 100%;
    padding: 16px;

    header {
        border-bottom: 1px solid #C4C4C4;
        display: flex;
        justify-content: center;
        padding-bottom: 16px;
        margin-bottom: 48px;

        div {

            display: flex;
            width: 100%;
            max-width: 150px;
            border: 1px dashed #6c63ef;
            height: 150px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }
    }

    div {
        display: flex;
        justify-content: space-between;


        strong {
            color: #B6C1DD;
            font-weight: normal;
            font-size: 18px;
        }

        span {
            font-size: 18px;
        }

        & + div {
            margin-top: 4px
        }
    }
`;
export const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 32px;
    align-items: center;

    > button {
        margin-right: 90px;
        display: flex;
        align-self: flex-end;
        align-items: center;
        border: 0;

        background: #6e63ef;
        text-decoration: none;
        color: #fff;
        width: 300px;
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
            background: ${shade(0.2, '#6e63ef')};
        }
    }

`;

export const SelectList = styled.div`
    background: #C6D0EC;
    width: 100%;
    border-radius: 4px;
    max-width: 1030px;
    padding: 32px 64px 64px 64px;


    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-size: 20px;
            color: #4E4E4E;
            margin-bottom: 16px;
        }
    }

    div {

        h1 {
            font-size: 20px;
            color: #4E4E4E;
            margin-bottom: 16px;
            margin-top: 16px;
        }

        select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        flex: 1;
        background: #fff;
        width: 260px;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #6c63ef;

            & + select {
                margin-left: 16px;
            }

        }

    }
`;

export const TripTypeInput = styled.div`

    div {
        display: flex;

        & + div {
            margin-left: 16px;
        }

    }
`;
export const VehicleInput = styled.div`
    div {
        display: flex;

        & + div {
            margin-left: 16px;
        }
    }
`;
export const DestinationInput = styled.div``;

export const EmptyProfileImage = styled.div`

    img {
        width: 100%;
        height: 100px;
        object-fit: cover;
    }

`;
