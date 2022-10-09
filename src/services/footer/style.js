import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #294380;
    width: 100%;
    height: 90vh;
`;

export const BoxList = styled.section`
    position: absolute;
    width: 100%;
    height: 90vh;
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