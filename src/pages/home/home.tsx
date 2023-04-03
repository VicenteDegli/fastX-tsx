import Header from '../../components/header/header'; 
import Cards from '../../components/cards/cards';
import Footer from '../../components/footer/footer';
import { Banner, Button, Description, Sinopse, TrailerContainer, TrailerContent, VideoContent} from './style';
import PosterImg from '../../assets/traler-img.jpg';
import Video from '../../assets/trailer.mp4';

function Home(){
    return(
        <>
            <Header/>
            <Banner></Banner>
            <TrailerContainer>
                <TrailerContent>
                    <VideoContent controls className="trailer" poster={PosterImg}>
                        <source src={Video} type="video/mp4" />
                        Seu navegador não possui suporte para vídeos!
                    </VideoContent>
                    <Sinopse>
                        <Description>
                            Ao longo de várias missões e enfrentando probabilidades impossíveis, Dom Toretto (Vin Diesel)
                            e a sua família conseguiram ser mais espertos, resilientes, e rápidos do que todos os seus
                            inimigos. Agora, enfrentam o mais letal oponente que alguma vez encontraram: uma terrível 
                            ameaça vinda das sombras do passado, motivado por uma vingança sangrenta e determinado a 
                            quebrar esta família e a destruir tudo — e todos — que sejam próximos de Dom, para sempre.
                        </Description>
                        <Button>
                            Comprar Ingresso
                        </Button>
                    </Sinopse> 
                </TrailerContent>
            </TrailerContainer>
            <Cards />
            <Footer />  
        </>
    )
}

export default Home;