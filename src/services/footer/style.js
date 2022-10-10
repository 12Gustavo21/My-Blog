import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #294380;
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    isolation: isolate;
`;

export const BoxList = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
    }
`;

export const List = styled.ul`
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
        font-size: 1.7em;
    }
`;