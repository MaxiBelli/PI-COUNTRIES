import React from 'react';
import style from './Loading.css';


export default function LandingPage(){
    return(
        <div className={style.loading}>
            <div className={style.circleContainer}>
            <div className={style.circle}></div>
            <h1 className={style.h1}>LOADING...</h1>
            </div>
        </div>
        
        
    )
}

