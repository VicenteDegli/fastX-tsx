import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { HeaderComponent, ImgContainer, ListItem, NavComponent, UlComponent } from './styles';

function Header(){
    return(
        <HeaderComponent>
            <ImgContainer alt="" src={Logo} />
            <NavComponent>
                <UlComponent>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <ListItem className='liHeader'>home</ListItem>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contatos'>
                        <ListItem className='liHeader'>Contato</ListItem>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                        <ListItem className='liHeader'>Fotos</ListItem>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/comentarios'>
                        <ListItem className='liHeader'>Comentários</ListItem>
                    </Link>
                </UlComponent>
            </NavComponent>
        </HeaderComponent>
    )
}

export default Header;