import { ActorCardsContainer, Card, CardsContent } from "./style";
import Banner1 from '../../assets/vinDieselCard.jpg';
import Banner2 from '../../assets/jasonMamoaCard.jpg';
import Banner3 from '../../assets/johnCenaCard.jpg';

function Cards(){
    return(
        <ActorCardsContainer>
            <CardsContent>
                
                <Card img={Banner1}>Vin Diesel - Diminic Toretto</Card>
                <Card img={Banner2}>Jason Mamoa - Dante</Card>
                <Card img={Banner3}>John Cena - Jakob Toretto</Card>
            </CardsContent>
        </ActorCardsContainer>
    )
}

export default Cards;