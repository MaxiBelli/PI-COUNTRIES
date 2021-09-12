import React from "react";


export default function CardCountries ({ flag, name, continent, population }){
    return (
        <div className= "card">
            <h2 >{name}</h2>
            <img  src={flag} alt="img countrie not found" width="250px" height="150px"/>
            <h3>{continent}</h3>
            {/* <h4>{population} habitans</h4> */}
            
        </div>
    );
}