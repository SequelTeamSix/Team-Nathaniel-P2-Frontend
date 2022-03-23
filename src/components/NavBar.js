import './NavBar.css';

import {Link} from 'react-router-dom';
import {useState} from 'react';
import icon from '../images/ui/nav-bar-icon.jpg';
import { useSelector, useDispatch } from "react-redux";
import loginIcon from '../images/ui/login-icon.jpg';

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
            return <Link to='/login'><img src={loginIcon} />  </Link>
        }else {
            return <span>Logout</span>
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
                        <li className='nav-logo'><Link className='nav-link' to='/home'><img src={require("../images/icons/icons8-mario-8-bit-50-white.png")}/></Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/allgames'> Games</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/character'>  Consoles</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/character'> Series</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/character'> Characters</Link></li>
                    </ul>
                </div>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        {getUserContentButton()}

                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;