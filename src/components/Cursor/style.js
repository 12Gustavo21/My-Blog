import styled from "styled-components";

export const Cursors = styled.section`
    .cursor-dot-outline,
    .cursor-dot {
        pointer-events: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        opacity: 1;
        transition: opacity .3 ease-in-out, transform .3s ease-in-out;
    }

    .cursor-dot {
        width: 8px;
        height: 8px;
        background-color: #333;
    }

    .cursor-dot-outline {
        width: 40px;
        height: 40px;
        background-color: #00FFFF;
    }
`;