import React from "react";
import "./CardCountries.css"

export default function CardCountries ({ flag, name, continent, population }){
    return (
        <div className= "card">
            <h2 >{name.toUpperCase()}</h2>
            <img  src={flag} alt="img countrie not found" width="200vw" height="120vw"/>
            <h3>{continent}</h3>
            {/* <h4>{population} habitans</h4> */}
        </div>
    );
}