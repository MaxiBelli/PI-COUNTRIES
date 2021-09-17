import React from "react";
import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.landing}>
      <h1 className={style.h1}>WELCOME</h1>
      <h1> COUNTRIES OF THE WORLD APP</h1>
      <Link to="/countries">
        <button className={style.button}>Get into</button>
      </Link>
    </div>
  );
}
