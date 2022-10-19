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

    .slick-next {
        right: 15px;
    }

    .slick-prev {
        left: 15px;
    }

    .slick-prev:before, 
    .slick-next:before {
        color: #75D5E6;
    }
`;

export const CarouselTitle = styled.h1`
    font-size: 2.5rem;
    color: #75D5E6;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    padding: 20px 0;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        padding: 20px;
    }
`;

export const Photo = styled.img`
    width: 90%;
    height: 70vh;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;

    @media only screen and (min-width: 320px) and (max-width: 480px) {
        width: 100%;
    }
`;

export const AboutMe = styled.section`
    width: 100%;
    min-height: 100vh;
`;

export const Description = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        flex-direction: column;
    }
`;

export const TextBox = styled.section`
    width: 60%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MyText = styled.p`
    font-size:  1.5rem;
    color: #75D5E6;
    word-break: break-all;
    text-align: center;
    padding: 0 20px;
    font-family: 'Raleway', sans-serif;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        padding: 20px 0 0 0;
    }
`;

export const PhotoBox = styled.figure`
    width: 40%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        width: 100%;
    }
`;

export const MyPhoto = styled.img`
    width: 80%;
    height: 90vh;
    border-radius: 20px;
    box-shadow: 0 20px 25px -10px;
    object-fit: cover;
    object-position: right;
    transition: 1s all;

    &:hover {
        box-shadow: 1px 1px 30px 1px;
        transform: scale(.9);
    }

    @media only screen and (min-width: 320px) and (max-width: 767px) {
        width: 19rem;
    }
`;

export const NextArrow = styled.button`
    background: #294380;
    border-radius: 50%;
    z-index: 999999999999999999;
`;

export const PrevArrow = styled(NextArrow)`
`;