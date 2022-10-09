import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        scroll-behavior: smooth;
        cursor: none;
    }

    ::-webkit-scrollbar {
        background: #29438050;
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: #0D0F36;
        border-radius: 10px;
    }
`;