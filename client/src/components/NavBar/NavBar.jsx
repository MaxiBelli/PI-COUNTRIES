import React from 'react';
import { Link } from 'react-router-dom'

import ReloadCountries from '../OrderFilter/ReloadCountries/ReloadCountries';
import SearchBar from '../SearchBar/SearchBar';

import style from "./NavBar.module.css"



export default function CardCountries(){

    return(
        <div className={style.Nav} >
                        <ReloadCountries />
                        <Link to='/activity'><button className={style.button}>Add Tourist Activity</button></Link>
                        <Link to='/'><h1 className={style.h1app} >COUNTRIES  APP</h1></Link>
                        <SearchBar/>
        </div>
    )
}



