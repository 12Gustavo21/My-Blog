import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background: #294380;
`;

export const Container = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const Figure = styled.figure`
    display: flex;
    width: 40%;
    padding: 10px;
`;

export const Logo = styled.img`
    width: 100%;
    height: 13vh;
`;

export const BoxList = styled.section`
    width: 100%;
    border-radius: 25px 0 0 25px;
    border: .1px solid #099FFF;
    background-color: #0D0F36;
    box-shadow: 0 4px 8px 0 #75D5E6, 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const List = styled.ul`
    width: 100%;
    min-height: 13vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    a {
        text-decoration: none;
    }
`;

export const Li = styled.li`
    color: white;
    font-size: 20px;
    color: #75D5E6;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: #75D5E6;
        transition: width 0.25s ease-out;
    }

    &:hover::before {
        width: 100%;
    }
`;

export const Menu = styled.section`
    margin-right: 40px;
    width: 5%;
    height: 3vh;
    display: none;
    /* display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column; */
`;

export const Line = styled.section`
    width: 100%;
    height: 1vh;
    background: #75D5E6;
    display: none;
    /* display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px; */
`;