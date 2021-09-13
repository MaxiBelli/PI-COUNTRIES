import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../actions"; 
import "./SearchBar.css"

export default function SearchBar (){
    const dispatch = useDispatch()
    const [name, setName] = useState("")


    function handleInputChange(e){//voy a guardar en mi estado local lo q vaya apareciendo en el input
        e.preventDefault()
        setName(e.target.value)
        
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameCountries(name))//yo voy a ir guardando lo q esta tipeando el usuario en el estado local name
    }


    return (
        <div >
            <input className="searchbar"
            type= "text"
            placeholder= "Search Countries..."
            onChange = {(e) => handleInputChange(e)}
            />
            <button type= "submit" onClick= {(e) => handleSubmit(e)}>Search</button>
        </div>
    )


}
