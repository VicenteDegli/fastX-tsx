import styled from 'styled-components';

export const ActorCardsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    background-color: #000;
`;

export const CardsContent = styled.div`
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        margin-top: 50px;
    }
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    row-gap: 20px;
    column-gap: 40px;
`;

export const Card = styled.div`
    width: 100%;
    height: 600px;
    background-size: cover;
    background-position: 50% 50%;
    border-radius: 5px;
    cursor: pointer;
    transition: 1s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 0 20px 10px;
    color: #fff;
    font-size: 17px;
    font-family: 'Kdam Thmor Pro', sans-serif;
    background-image: url(${(props) => props.img});
    &:hover{
        transform: scale(1.02);
    }
`;