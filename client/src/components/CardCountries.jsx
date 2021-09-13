import React from "react";
import "./CardCountries.css"

export default function CardCountries ({ flag, name, continent, population }){
    return (
        <div className= "card">
            <h3 >{name.toUpperCase()}</h3>
            <img  src={flag} alt="img countrie not found" width="230px" height="120px"/>
            <h4>{continent}</h4>
            {/* <h4>{population} habitans</h4> */}
        </div>
    );
}