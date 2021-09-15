import React from "react";
import { Link } from "react-router-dom" 
import style from "./LandingPage.module.css"


export default function LandingPage(){
    return(
        <div className={style.landing}>
            <h1>WELCOME TO THE COUNTRIES APP!!!</h1>
            <Link to="/countries">
                <button className={style.button}>Get in</button>
            </Link>
        </div>
    )
}