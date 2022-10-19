import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background: #294380;
`;

export const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Figure = styled.figure`
    display: flex;
    width: 40%;
    padding: 10px;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        justify-content: center;
        align-items: center;
    }
`;

export const Logo = styled.img`
    width: 23%;
    height: 13vh;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        width: 60%;
        height: 15vh;
        object-fit: contain;
    }
`;

export const BoxList = styled.section`
    width: 100%;
    border-radius: 25px 0 0 25px;
    border: .1px solid #099FFF;
    background-color: #0D0F36;
    box-shadow: 0 4px 8px 0 #75D5E6, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        width: 90%;
        border-radius: 25px;
    }
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
    font-size: 1.5em;
    color: #75D5E6;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    position: relative;

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

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 1em;
    }
`;