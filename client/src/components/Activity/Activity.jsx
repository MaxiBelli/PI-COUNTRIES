import React from "react";
import style from "./Activity.module.css";

function Activity({ name, duration, season, difficulty }) {
  return (
    <div className={style.activities}>
      <h2>{name}</h2>
      <div>
        <h3>DURATION: {duration} hrs.</h3>
      </div>
      <div>
        <h3> SEASON: {season}</h3>
        <div>
          <h3> DIFFICULTY: {difficulty}</h3>
        </div>
      </div>
    </div>
  );
}

export default Activity;
