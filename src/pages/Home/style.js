import styled, { keyframes } from "styled-components";

export const Main = styled.main`
    width: 100%;
    min-height: 85vh;
    background: #294380;
`;

export const Container = styled.section`
    width: 100%;
    min-height: 80vh;
    display: flex;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const Figure = styled.figure`
    width: 40%;
    height: 80vh;
    padding: 20px 0 0 40px;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-left: 0;
    }
`;

export const Photo = styled.img`
    width: 19rem;
    height: 75vh;
    border-radius: 20px;
    box-shadow: 0 25px 25px -10px;
    object-fit: cover;
    object-position: center;
    transition: 1s all linear;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        width: 17rem;
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        width: 15rem;
    }

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

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        width: 100%;
    }
`;

export const Greetings = styled.section`
    display: flex;

    @media only screen and (min-width: 320px) and (max-width: 1023px) {
        align-items: center;
        justify-content: center;
    }
`;

export const GreetingsBox = styled.section`
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (min-width: 320px) and (max-width: 1023px) {
        justify-content: space-evenly;
    }
`;

const Wave = keyframes`
    0%,
    100% {
        clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }

    50% {
        clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
    }
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
        animation: ${Wave} 3s ease-in-out infinite;
        filter: drop-shadow(1px 1px 1px #000);
    }
`;

export const MyName = styled.section`
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    font-size: 4em;
    color: #75D5E6;
    padding-right: 20px;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        font-size: 3em;
        padding: 0;
    };
`;

export const HI = styled.img`
    width: 13%;
    height: 8vh;
    filter: drop-shadow(1px 1px 2px #000);
    position: relative;
    left: 50%;

    @media only screen and (min-width: 320px) and (max-width: 1023px) {
        width: 20%;
        height: 10vh;
        position: relative;
        top: 70px;
        left: 0;
    }
`;

export const BoxTwo = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 220px;

    @media only screen and (min-width: 320px) and (max-width: 1023px) {
        padding: 0;
    }
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
    align-items: center;
`;

export const Icons = styled.section`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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