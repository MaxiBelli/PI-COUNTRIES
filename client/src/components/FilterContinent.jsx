import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCountriesByContinent } from "../actions";


export default function FilterContinent (){

    const dispatch = useDispatch();
    
    function handleFilterContinent(e){
        dispatch(filterCountriesByContinent(e.target.value))
}

    return(
        <div> 
        <h2>Filtered By:</h2>  
            <select onChange={e => handleFilterContinent(e)}>
                <option value = "-Continent-">-Continent-</option>
                <option value = "Africa">Africa</option>
                <option value = "Americas">Americas</option>
                <option value = "Asia">Asia</option>
                <option value = "Europe">Europe</option>
                <option value = "Oceania">Oceania</option>
            </select>

        </div> 
    )
}