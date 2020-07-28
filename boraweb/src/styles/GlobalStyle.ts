import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
     * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #f0f0f5;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
    }
    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 500;
    }
    button {
        cursor: pointer;
    }

`;
