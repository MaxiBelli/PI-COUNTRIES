import React from 'react';
import { Link } from 'react-router-dom'

import ReloadCountries from './ReloadCountries';
import SearchBar from './SearchBar';

import "./NavBar.css"



export default function CardCountries(){

    return(
        <div className="Nav" >
                        <ReloadCountries />
                        <Link to='/activity'><button className="button">Create Activity</button></Link>
                        <Link to='/'><h1 className="h1app" >COUNTRIES  APP</h1></Link>
                        <SearchBar/>
        </div>
    )
}



