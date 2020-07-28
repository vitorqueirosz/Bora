import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 150px;
    border: 1px dashed #6c63ef;
    height: 150px;
    /* justify-content: space-around; */
    /* align-items: center; */
    background: #BEBBEC;
    border-radius: 50%;
    outline: 0;
    margin-bottom: 22px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }

    svg {
        color: #6c63ef;
        width: 24px;
        height: 24px;
        margin-bottom: 8px;
        display: flex;

    }

    p {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #183172;
        font-size: 14px;
        text-align: center;
    }
`;

export default styled;
