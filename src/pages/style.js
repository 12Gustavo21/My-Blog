import styled from "styled-components";

export const Header = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #294380;
`;

export const BoxList = styled.section`
    width: 80%;
    border-radius: 25px;
    border: .1px solid #099FFF;
    background-color: #0D0F36;
    box-shadow: 0 4px 8px 0 #75D5E6, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1%;
`;

export const List = styled.ul`
    width: 100%;
    min-height: 13vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    a {
        text-decoration: none;
    }
`;

export const Li = styled.li`
    color: white;
    font-size: 20px;
    color: #75D5E6;
    position: relative;
    font-family: 'Open Sans', sans-serif;
    font-family: 500;

    &::after {
        display: block;
        content: '';
        border-bottom: solid 1px #00FFFF;
        transform: scaleX(0);
        transition: transform 300ms ease-in-out;
    }

    &:hover::after {
        transform: scaleX(1);
    }
`;