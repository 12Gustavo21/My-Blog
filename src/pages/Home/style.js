import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 85vh;
    background: #294380;
`;

export const Container = styled.section`
    width: 100%;
    height: 85vh;
    display: flex;
`;

export const Figure = styled.figure`
    width: 50%;
    height: 85vh;
    padding: 20px 0 0 40px;
`;

export const Photo = styled.img`
    width: 45%;
    height: 75vh;
    border-radius: 20px;
    box-shadow: 0 25px 25px -10px;
    object-fit: cover;
    transition: 1s all;

    &:hover {
        border-radius: 50px;
        transform: scale(.95);
        box-shadow: 10px 10px 30px 10px;
    }
`;

export const Information = styled.section`
    width: 50%;
    height: 85vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Greetings = styled.section`
    display: flex;
`;

export const GreetingsBox = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const BoxOne = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MyName = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    font-size: 4em;
    color: #75D5E6;
    filter: drop-shadow(5px 6px 10px #000);
    padding-right: 20px;
`;

export const HI = styled.img`
    width: 10%;
    height: 8vh;
    filter: drop-shadow(1px 1px 2px #000);
`;

export const BoxTwo = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 220px;
`;

export const Salutation = styled.h1`
    font-size: 3em;
    color: #75D5E6;
    font-family: 'Raleway', sans-serif;
    filter: drop-shadow(1px 1px 5px #000);
`;

export const SocialMedias = styled.section`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const Icons = styled.section`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
`;

export const Icon = styled.img`
    width: 15%;
    height: 15vh;
`;