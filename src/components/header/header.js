import {Link} from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './styles.css';

function Header(){
    return(
        <header>
            <img alt="" id="logo" src={Logo} />
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                        <li className='liHeader'>home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contatos'>
                        <li className='liHeader'>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                        <li className='liHeader'>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/comentarios'>
                        <li className='liHeader'>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;