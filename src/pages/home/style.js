import styled from 'styled-components';
import BannerImg from '../../assets/banner.jpg'

export const Banner = styled.div`
    @media (max-width: 768px){
        background-position: 40%;
    }
    background-image: url(${BannerImg});
    background-position: 50% 15%;
    background-size: cover;
    width: 100%;
    height: 400px;
`;

export const TrailerContainer = styled.div`
    @media (max-width: 768px){
        height: auto;
    }
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    background-color: #000;
`;

export const TrailerContent = styled.div`
    
    display: flex;@media (max-width: 768px){
        display: block;
    }
    align-items: center;
    justify-content: space-between; 
    padding: 0px 20px 0px 20px;
`;

export const VideoContent = styled.video`
    @media (max-width: 768px){
        padding-top: 10px;
        width: 100%;
    }
    width:35%;
    height: 250px;
`;

export const Sinopse = styled.div`
    @media (max-width: 768px){
        width: 100%;
        margin: 0;
    }
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
    text-align: justify;
`;

export const Description = styled.p`
    @media (max-width: 768px){
        width: 100%;
    }
    color: #fff;
    font-size: 18px;
    font-family: 'Kdam Thmor Pro', sans-serif;
    width: 10   0%;
`;

export const Button = styled.button`
    @media (max-width: 768px){
        width: 100%;
        margin-top: 30px;
    }
    width: 200px;
    height: 50px;
    background-color: #d21617;
    color: #fff;
    padding: 8px 10px;
    border-radius: 5px;
    cursor: pointer;
    transform: .8s;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border: none;
    outline: none;
    margin-top: 25px;
    &:hover{
        background-color: #fff;
        color: #000;
    }
`;


