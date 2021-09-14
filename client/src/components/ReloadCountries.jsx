import React from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from "../actions"; 
// import style from './cleanFilters.module.css'


export default function ReloadCountries () {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getCountries())
    };

    return(
        <div>
            <button className="button" onClick={e=>{handleSubmit(e)}}>All Countries</button>
        </div>
    )
}
