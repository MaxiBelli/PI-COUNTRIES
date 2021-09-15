import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCountriesByContinent } from "../../../redux/actions"


export default function FilterContinent (){

    const dispatch = useDispatch();
    
    function handleFilterContinent(e){
        dispatch(filterCountriesByContinent(e.target.value))
}

    return(
        <div> 
        <h3>Filtered By:</h3>  
            <select onChange={e => handleFilterContinent(e)}>
                <option value = "all">-Continent-</option>
                <option value = "Africa">Africa</option>
                <option value = "Americas">Americas</option>
                <option value = "Asia">Asia</option>
                <option value = "Europe">Europe</option>
                <option value = "Oceania">Oceania</option>
            </select>

        </div> 
    )
}