import React from 'react';
import { Link } from 'react-router-dom'

import ReloadCountries from './ReloadCountries';
import SearchBar from './SearchBar';
// import style from './navBar.module.css'

import './Navbar.css';

const NavBar = () => {

    return(
        <header className="navbar">
        
            <nav>
                 <ul className="list">
                    <li className="list-item">
                        <ReloadCountries/>
                        <Link to='/activity'><button className="button">Create Activity</button></Link>
                         
                        <Link to='/'><h1 >COUNTRIES APP</h1></Link>
                        <SearchBar/>
                    </li>
                 </ul>
            </nav>

        </header>
    )
}

export default NavBar;

<Link to="/activity">Create Activity</Link>