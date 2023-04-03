import styled from 'styled-components';

export const HeaderComponent = styled.header`
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
`;

export const NavComponent = styled.nav`
    width: 60%;
`;

export const ImgContainer = styled.img`
    @media(max-width: 768px){
        width: 90px;
    }
    width: 150px;
    height: auto;
`;

export const UlComponent = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const ListItem = styled.li`
    @media (max-width: 768px) {
        font-size: 12px;
    }
    list-style: none;
    color: aliceblue;
    cursor: pointer;
    font-size: 19px;
    transition: .5s;
    font-family: 'Kdam Thmor Pro', sans-serif;
    text-decoration: none;
    &:hover{
        color: red;
    }
`;

