import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    min-height: 90vh;
    background: #294380;
`;

export const TitleBox = styled.section`
    width: 100%;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    color: #75D5E6;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    padding: 30px;
`;

export const Text = styled.p`
    font-size:  1.5rem;
    color: #75D5E6;
    word-break: break-all;
    text-align: center;
    font-family: 'Raleway', sans-serif;
    padding: 0 20px;
`;

export const Container = styled.section`
    max-width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ObjectivesBox = styled.section`
    max-width: 100%;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const ObjectiveImage = styled.img`
    max-width: 100%;
    max-height: 40vh;
    object-fit: cover;
    transition: .5s all linear;

    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(0 0 15px #75D5E6);
    }
`;


export const Header = styled.header`
    width: 100%;
    height: 15vh;
    background: #294380;
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    cursor: pointer;
    background: none;
    border: 2px solid #75D5E6;
    color: #75D5E6;
    font-size: 1.5em;
    padding: 10px;
    margin: 0 10px;
    border-radius: 20px;
    transition: .5s all linear;

    &:hover {
        background: #75D5E6;
        color: #294380;
    }
`;