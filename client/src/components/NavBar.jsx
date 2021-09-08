import React from 'react';
import { Link } from 'react-router-dom'

import ReloadCountries from './ReloadCountries';
import SearchBar from './SearchBar';
// import style from './navBar.module.css'


const NavBar = () => {

    return(
        <div >
            <ReloadCountries/>
            <Link to='/activity'>
                <button>
                         Create Activity
                </button>
            </Link>
            <h1 >COUNTRIES APP</h1>
           <SearchBar/>
        </div>
    )
}

export default NavBar;

<Link to="/activity">Create Activity</Link>