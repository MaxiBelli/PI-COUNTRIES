import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, postActivity } from "../actions";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Complete the Name Field of the Activity";
  } if (!input.duration) {
    errors.duration = "Complete the Activity Duration field";
  } if (!input.difficulty) {
    errors.difficulty = "Check a box corresponding to the difficulty";
  } else if (!input.season) {
    errors.difficulty = "Check a box corresponding to the season";
  }
    return errors;

}
export default function ActivityCreated() {
  const dispatch = useDispatch();
  const history = useHistory();
  const activities = useSelector((state) => state.activities);
  const allCountries = useSelector((state) => state.allCountries);
  const countries = useSelector((state) => state.countries);


  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
    allCountries: []
  });

  function handleChangeName(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }

  function handleChangeDuration(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleCheckDifficulty(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        difficulty: e.target.value,
      });
    }
  }
  function handleCheckSeason(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        season: e.target.value,
      });
    }
  }

  function handleSelectCountry(e) {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
  }

  function handleDeleteCountry(el) {
    setInput({
      ...input,
      countries: input.countries.filter((ctry) => ctry !== el),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postActivity(input));
    alert("Successfully created activity!!!");
    setInput({
      name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
    });
    history.push("/countries");
  }

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  return (
    <div>
      <Link to="/countries">
        <button>Back</button>
      </Link>
      <h1>Create Activity!!!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChangeName(e)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            value={input.duration}
            name="duration"
            onChange={(e) => handleChangeDuration(e)}
          />
          {errors.duration && <p className="error">{errors.duration}</p>}
        </div>
        <div>
          <label>Difficulty:</label>
          <label>
            <input
              type="checkbox"
              value="1"
              name="1"
              onChange={(e) => handleCheckDifficulty(e)}
            />
            1
          </label>
          <label>
            <input
              type="checkbox"
              value="2"
              name="2"
              onChange={(e) => handleCheckDifficulty(e)}
            />
            2
          </label>
          <label>
            <input
              type="checkbox"
              value="3"
              name="3"
              onChange={(e) => handleCheckDifficulty(e)}
            />
            3
          </label>
          <label>
            <input
              type="checkbox"
              value="4"
              name="4"
              onChange={(e) => handleCheckDifficulty(e)}
            />
            4
          </label>
          <label>
            <input
              type="checkbox"
              value="5"
              name="5"
              onChange={(e) => handleCheckDifficulty(e)}
            />
            5
          </label>
    
        </div>
        <div>
          <label>Season:</label>
          <label>
            <input
              type="checkbox"
              value="Autumn"
              name="Autumn"
              onChange={(e) => handleCheckSeason(e)}
            />
            Autumn
          </label>
          <label>
            <input
              type="checkbox"
              value="Winter"
              name="Winter"
              onChange={(e) => handleCheckSeason(e)}
            />
            Winter
          </label>
          <label>
            <input
              type="checkbox"
              value="Spring"
              name="Spring"
              onChange={(e) => handleCheckSeason(e)}
            />
           Spring
          </label>
          <label>
            <input
              type="checkbox"
              value="Summer"
              name="Summer"
              onChange={(e) => handleCheckSeason(e)}
            />
            Summer

          </label>
        </div>
        <select onChange={(e) => handleSelectCountry(e)}>
          {allCountries.sort((a, b) => {
                      if (a.name > b.name) {
                        return 1;
                      }
                      if (a.name < b.name) {
                        return -1;
                      }
                      return 0;
                    })
          .map((ctry) => (
            <option value={ctry.name}>{ctry.name}</option>
          ))}
        </select>
        <ul>
          <li>{input.countries.map((el) => el + " ,")}</li>
        </ul>
        <button type="submit">Create Activity</button>{" "}
      </form>
      {input.countries.map((el) => (
        <div>
          <p>{el}</p>
          <button onClick={() => handleDeleteCountry(el)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}
