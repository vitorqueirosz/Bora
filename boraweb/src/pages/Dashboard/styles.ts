import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    height: 100vh;
`;

export const AsideContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
        height: 220px;
        justify-content: center;
        padding-bottom: 24px;
        margin-bottom: 48px;

        div {

            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 150px;
            height: 150px;

        img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }

            a {
                margin-top: 16px;
                text-decoration: none;
                background: #fff;
                color: #6c63ef;
                padding: 8px;
                border-radius: 2px;

                &:hover {
                background: ${shade(0.1, '#fff')};
            }

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

    header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width:1030px;
        margin-bottom: 32px;

        button {

            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: #4E4E4E;
            border: 0;
            background: none;

            svg {
                color: #6C63EF;
                margin-right: 8px;

            }

            &:hover {
                color: ${shade(0.5, '#ddd')};
            }
        }

        h1 {
            font-size: 23px;
            font-weight: 500;
            color: #4E4E4E;

        }

    }



    a {
        display: flex;
        align-items: center;

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

export const TravelList = styled.div`
    background: #C6D0EC;
    width: 100%;
    max-width: 1030px;
    border-radius: 4px;
    padding: 32px;
    /* height: 100%; */

    ul {
        list-style: none;
    }

    li {
        display: flex;
        width: 100%;
        background: #fff;
        height: 60px;
        border-radius: 8px;

        & + li {
            margin-top: 32px;
        }


        header {
            width: 220px;
            background: #6e63ef;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px 0 0 8px;
        }

        div {

            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: auto;

            div {
                display: flex;
                flex-direction: column;


                strong {
                color: #363636;
                font-weight: normal;
                }

                span {
                    color: #6e63ef;
                    margin-top: 4px;
                }

                & + div {
                    margin-left: 32px;
                }
            }

        }

        aside {
            display: flex;
            width: 150px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-left: 2px solid #C4C4C4;

            strong {
            color: #363636;
            font-weight: normal;
            }

            span {
                color: #6e63ef;
                margin-top: 4px;
            }
        }
    }

`;


export const EmptyTravelList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background: #C6D0EC;
    width: 100%;
    max-width: 1030px;
    padding: 32px 32px;
    height: 350px;
    border-radius: 8px;

    span {
        color: #6c63ef;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 50px;
            margin-left: 16px;
        }
    }


`;

export const EmptyProfileImage = styled.div`

    img {
        width: 100%;
        height: 100px;
        object-fit: cover;
    }

`;
