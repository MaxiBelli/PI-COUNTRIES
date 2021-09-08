import React from "react";



function Activity({ name, duration, season, difficulty, edit }) {
  let stars = [];
  for (let i = 1; i <= difficulty; i++) {
    stars.push(i);
  }
  return (
    <div>
      {edit ? <span>These are current values</span> : null}
      <h1 id="nombre">{name}</h1>
      <div >
  
        <h4>{duration} min</h4>
      </div>
      <div >
        <h4>{season}</h4>
        <div>
          {stars.map((el) => (
            <img
              src="https://image.flaticon.com/icons/png/512/1828/1828665.png"
              width="10"
              height="10"
              className="cross"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Activity;
