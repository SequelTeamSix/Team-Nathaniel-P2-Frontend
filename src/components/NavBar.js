import './NavBar.css';

import {Link} from 'react-router-dom';
import {useState} from 'react';
import icon from '../images/ui/nav-bar-icon.jpg';

function NavBar() {
    const [show, updateShow] = useState('');

    function showBar() {
        updateShow(show === '' ? 'show' : '');
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
                        <li className='nav-item'><Link className='nav-link' to='/character'> Games</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/character'>  Consoles</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/character'> Series</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/character'> Characters</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;