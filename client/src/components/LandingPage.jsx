import React from "react";
import { Link } from "react-router-dom" 
import "./LandingPage.css"


export default function LandingPage(){
    return(
        <div className="landing">
            <h1>WELCOME TO THE COUNTRIES APP!!!</h1>
            <Link to="/countries">
                <button className="button">Get in</button>
            </Link>
        </div>
    )
}