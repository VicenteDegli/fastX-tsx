import './styles.css';
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <img style={{objectFit: 'contain'}} id="logo" src={Logo} alt=""/>
            <span className="footerSpan">Todos os direitos reservados ©</span>
            <span className="footerSpan">Desenvolvido por: Vicente de Paulo</span>

            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li className='liFooter'>Home</li>
                    </Link>
                    <Link to='/contatos' style={{textDecoration: 'none'}}>
                        <li className='liFooter'>Contatos</li>
                    </Link>
                    <Link to='/fotos' style={{textDecoration: 'none'}}>
                        <li className='liFooter'>Fotos</li>
                    </Link>
                    <Link to='/comentarios' style={{textDecoration: 'none'}}>
                        <li className='liFooter'>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;