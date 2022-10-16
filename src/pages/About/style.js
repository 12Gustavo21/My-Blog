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

export const ContentBox = styled.section`
    width: 100%;
    min-height: 100vh;
`;

export const CarouselBox = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
`;

export const CarouselTitle = styled.h1`
    font-size: 2.5rem;
    color: #75D5E6;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
`;

export const Photo = styled.img`
    width: 90%;
    height: 70vh;
    object-fit: cover;
    border-radius: 5px;
`;

export const AboutMe = styled.section`
    width: 100%;
    min-height: 100vh;
`;

export const Description = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px;
`;

export const MyText = styled.p`
    font-size:  1.5rem;
    color: #75D5E6;
    word-break: break-all;
    text-align: center;
    padding: 30px;
    font-family: 'Raleway', sans-serif;
`

export const MyPhoto = styled.img`
    width: 30%;
    height: 90vh;
    border-radius: 20px;
    object-fit: cover;

    @media only screen and (min-width: 1024px) {
        height: 80vh;
    }
`;