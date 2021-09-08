import React from "react";
import { Link } from "react-router-dom" 


export default function LandingPage(){
    return(
        <div>
            <h1>Welcome Countries!!!</h1>
            <Link to="/countries">
                <button>Get in</button>
            </Link>
        </div>
    )
}