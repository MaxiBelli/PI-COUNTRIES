import React from "react";
import "./Activity.css"


function Activity({ name, duration, season, difficulty}) {
  return (
    <div className="activities" >
      <h2>{name}</h2>
      <div >
        <h4>Duration: {duration} min</h4>
      </div>
      <div >
        <h4> Season: {season}</h4>
        <div>
        <h4> Difficulty: {difficulty}</h4>
        </div>
      </div>
    </div>
  );
}

export default Activity;
