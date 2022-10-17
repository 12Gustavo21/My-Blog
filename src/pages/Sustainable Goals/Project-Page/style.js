import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    background: #294380;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: #75D5E6;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    padding-top: 30px;
`;

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentBox = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const ImageBox = styled.figure`
    width: 50%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProjectImage = styled.img`
    width: 70%;
    height: 75vh;
    object-fit: cover;
`;

export const TextBox = styled.section`
    width: 50%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Description = styled.p`
    font-size:  1.5rem;
    color: #75D5E6;
    text-align: center;
    padding: 0 20px;
    font-family: 'Raleway', sans-serif;
    word-break: break-all;
`;