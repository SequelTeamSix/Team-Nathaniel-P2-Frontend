import './NavBar.css';

import {Link} from 'react-router-dom';
import {useState} from 'react';
import icon from '../images/ui/nav-bar-icon.jpg';
import { useSelector, useDispatch } from "react-redux";
import loginIcon from '../images/ui/login-icon.jpg';

import userIcon from '../images/icons/pixel-user-icon-white.png';
import cartIcon from '../images/icons/pixel-cart-white.png';
import logoIcon from '../images/icons/icons8-mario-8-bit-50-white.png';
import titleIcon from '../images/icons/revature-retro-logo-orange.png';

function NavBar() {
    const [show, updateShow] = useState('');

    const dispatch = useDispatch();

    const shoppingCart = useSelector((state) => state.shoppingCart);
    const user = useSelector((state) => state.user);

    function showBar() {
        updateShow(show === '' ? 'show' : '');
    }
    let userContent = '';

    function getUserContentButton() {
        if (Object.keys(user).length === 0){
            return <Link to='/login'><img src={loginIcon} className='user-icon' />  </Link>
        }else {
            return <span>Logout</span>
        }
    }

    function getUserCartButton() {
        if (Object.keys(user).length === 0){
            return <Link to='/login'><img src={cartIcon} height='50px' className='user-icon'/>  </Link>
        }
    }


    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={showBar}>
                    <img src={icon} className='nav-icon' />
                </button>
                <div className={'collapse navbar-collapse ' + show} id="navbarCollapse">
                    <ul className='navbar-nav'>
                        <li className='nav-logo'><Link className='nav-link' to='/home'><img width='150px' src={titleIcon} /></Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/game'> Games</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/console'>  Consoles</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/series'> Series</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/character'> Characters</Link></li>
                    </ul>
                </div>
                <ul className='navbar-nav ml-auto d-flex align-items-center'>
                    <li className='user-item'>
                        {getUserCartButton()}
                    </li>
                    <li className='user-item'>
                        {getUserContentButton()}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;