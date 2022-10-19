import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #294380;
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    isolation: isolate;
`;

export const BoxList = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
    }

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const List = styled.ul`
    width: 85%;
    min-height: 40vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
    }

    li {
        font-size: 1.7em;
    }
`;