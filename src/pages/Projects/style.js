import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    background: #294380;
    overflow: hidden;
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
`;

export const Projects = styled.section`
    width: 100%;
    min-height: 100vh;
`;

export const ProjectBox = styled.section`
    width: 100%;
    min-height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Acess = styled.section`
    width: 50%;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
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
    width: 100%;
    height: 10vh;
`;

export const Link = styled.h1`
    color: #75D5E6;
    font-size: 2em;
    font-family: 'Raleway', sans-serif;
    filter: drop-shadow(0 3px 6px #000);
`;

export const ProjectImageBox = styled.section`
    width: 50%;
    min-height: 50vh;
`;

export const ProjectPhoto = styled.img`
    width: 100%;
    height: 60vh;
`;