import React from "react";
import style from "./CardCountries.module.css";

export default function CardCountries({ flag, name, continent }) {
  return (
    <div className={style.card}>
      <h2 className={style.name}>{name.toUpperCase()}</h2>
      <img
        src={flag}
        alt="img countrie not found"
        width="250em"
        height="125em"
      />
      <h2 className={style.continent}>{continent}</h2>
    </div>
  );
}
