import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 85vh;
    background: #294380;
`;

export const Container = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
`;

export const Figure = styled.figure`
    width: 40%;
    height: 80vh;
    padding: 20px 0 0 40px;
`;

export const Photo = styled.img`
    width: 60%;
    height: 75vh;
    border-radius: 20px;
    box-shadow: 0 25px 25px -10px;
    object-fit: cover;
    transition: 1s all linear;

    &:hover {
        box-shadow: 1px 1px 30px 1px;
        transform: scale(.9);
    }
`;

export const Information = styled.section`
    width: 60%;
    height: 80vh;
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

    section {
        position: absolute;
    }

    section:nth-child(1) {
        color: #75D5E630;
        -webkit-text-stroke: .3px #75D5E6;
        filter: drop-shadow(5px 6px 10px #000);
    }

    section:nth-child(2) {
        -webkit-text-stroke: 1px #75D5E6;
        animation: wave 3s ease-in-out infinite;
        filter: drop-shadow(1px 1px 1px #000);
    }

    @keyframes wave {
        0%,
        100% {
            clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
        }

        50% {
            clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
        }
    }
`;

export const MyName = styled.section`
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    font-size: 4em;
    color: #75D5E6;
    padding-right: 20px;
`;

export const HI = styled.img`
    width: 13%;
    height: 8vh;
    filter: drop-shadow(1px 1px 2px #000);
    position: relative;
    left: 50%;
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
    width: 100%;
    height: 15vh;
    transition: 1s all linear;

    &:hover {
        transform: scale(.9);
        filter: drop-shadow(1px 1px 5px #000);
    }
`;