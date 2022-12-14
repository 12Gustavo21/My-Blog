import styled from "styled-components";

export const Cursors = styled.section`
    .large_circle,
    .small_circle {
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        transition: transform .1s linear;
        z-index: 999999;

        @media only screen and (min-width: 320px) and (max-width: 1023px) {
            display: none;
        }
    }

    .large_circle {
        background: none;
        border: 2px solid #00FFFF;
        opacity: .5;
        width: 64px;
        height: 64px;
    }

    .small_circle {
        width: 20px;
        height: 20px;
        background-color: #333;
        opacity: .8;
    }
`;