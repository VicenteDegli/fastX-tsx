import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FooterLogo, FooterSpan, FooterContainer, FooterNavigation, FooterList, ListItem } from "./style";

function Footer(){
    return(
        <FooterContainer>
            <FooterLogo src={Logo} alt=""/>
            <FooterSpan>Todos os direitos reservados ©</FooterSpan>
            <FooterSpan>Desenvolvido por: Vicente de Paulo</FooterSpan>

            <FooterNavigation>
                <FooterList>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <ListItem>Home</ListItem>
                    </Link>
                    <Link to='/contatos' style={{textDecoration: 'none'}}>
                        <ListItem>Contatos</ListItem>
                    </Link>
                    <Link to='/fotos' style={{textDecoration: 'none'}}>
                        <ListItem>Fotos</ListItem>
                    </Link>
                    <Link to='/comentarios' style={{textDecoration: 'none'}}>
                        <ListItem>Comentários</ListItem>
                    </Link>
                </FooterList>
            </FooterNavigation>
        </FooterContainer>
    )
}

export default Footer;