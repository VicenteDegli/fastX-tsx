import styled from 'styled-components';

export const FooterContainer = styled.footer`
    padding-top: 30px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #000;
`;

export const FooterLogo = styled.img`
    width: 150px;
    height: auto;
    object-fit: contain;
`;

export const FooterSpan = styled.span`
    color: #fff;
    font-family: 'Kdam Thmor Pro', sans-serif;
`;

export const FooterNavigation = styled.nav`
    @media (max-width: 768px){
        display: block;
    }
    display: none;
`;

export const FooterList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly; 
`;

export const ListItem = styled.li`
    list-style: none;
    color: aliceblue;
    cursor: pointer;
    font-size: 19px;
    transition: .5s;
    font-family: 'Kdam Thmor Pro', sans-serif;
    &:hover{
        color: #d21617;
    }
`;