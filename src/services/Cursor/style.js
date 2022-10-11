import styled from "styled-components";

export const Cursors = styled.section`
    .large_circle,
    .small_circle {
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        transition: transform 0.1s;
        z-index: 999999;
    }

    .large_circle {
        background-color: #00FFFF;
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