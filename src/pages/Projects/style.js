import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    background: #294380;
`;

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: #75D5E6;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    padding: 30px;
    word-break: break-all;

    @media only screen and (min-width: 320px) and (max-width: 600px) {
        font-size: 2rem;
    }
`;

export const Projects = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ProjectBox = styled.section`
    width: 100%;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media only screen and (min-width: 320px) and (max-width: 600px) {
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

export const Acess = styled.section`
    width: 50%;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    @media only screen and (min-width: 320px) and (max-width: 600px) {
        width: 100%;
        min-height: 30vh;
    }
`;

export const AcessBox = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    a {
        text-decoration: none;
    }
`;

export const Icon = styled.img`
    height: 10vh;
    transition: 1s all linear;

    &:hover {
        filter: drop-shadow(5px 5px 6px #000);
    }
`;

export const Link = styled.h1`
    color: #75D5E6;
    font-size: 2em;
    font-family: 'Raleway', sans-serif;
    filter: drop-shadow(0 3px 6px #000);
    transition: 1s all linear;

    &:hover {
        letter-spacing: 2px;
    }
`;

export const ProjectImageBox = styled.figure`
    width: 50%;
    min-height: 50vh;
    overflow: hidden;

    @media only screen and (min-width: 320px) and (max-width: 600px) {
        width: 100%;
    }
`;

export const ProjectPhoto = styled.img`
    width: 100%;
    height: 60vh;
    transition: 1s all;

    &:hover {
        filter: grayscale(100%);
        transform: scalex(1.1);
    }

    @media only screen and (min-width: 320px) and (max-width: 600px) {
        height: 45vh;
    }

    @media only screen and (min-width: 601px) and (max-width: 1023px) {
        height: 50vh;
    }
`;