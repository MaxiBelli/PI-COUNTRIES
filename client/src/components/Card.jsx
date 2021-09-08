import React from "react";

export default function Card ({ flag, name, continent, population }){
    return (
        <div>
            <img src={flag} alt="img countrie not found" width="250px" height="250px"/>
            <h2>{name}</h2>
            <h4>{continent}</h4>
            <h4>{population} habitans</h4>
        </div>
    );
}