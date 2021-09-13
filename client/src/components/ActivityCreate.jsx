
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getCountries, postActivity } from "../actions";
import "./ActivityCreate.css"

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Complete the Name Field of the Activity";
  } if (!input.duration) {
    errors.duration = "Complete the Activity Duration field";
  } if (!input.difficulty) {
    errors.difficulty = "Check a box corresponding to the difficulty";
  } if (!input.season) {
    errors.season = "Check a box corresponding to the season";
  } if (!input.countries) {
    errors.countries = "Select the corresponding country / countries";
  }
    return errors;

}
export default function ActivityCreated() {
  const dispatch = useDispatch();
  // const history = useHistory();
  // const activities = useSelector((state) => state.activities);
  // const allCountries = useSelector((state) => state.allCountries);
  const allCountries = useSelector((state) => state.countries);


  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
    // allCountries: []
  });

  function handleChangeName(e) {
    setInput({ ...input, [e.target.name]: e.target.value
      });
    setErrors(
      validate({ ...input,[e.target.name]: e.target.value,
      })
    );
  }

  function handleChangeDuration(e) {
    setInput({...input, [e.target.name]: e.target.value,
      });
    setErrors(
      validate({ ...input, [e.target.name]: e.target.value,
      })
    );
  }

  function handleCheckDifficulty(e) {
    if (e.target.checked) {
      setInput({...input, difficulty: e.target.value,
      });
    }
    setErrors(
      validate({...input, difficulty: e.target.value,
      })
    );
  }

  function handleCheckSeason(e) {
    if (e.target.checked) {
      setInput({...input, season: e.target.value,
     });
    }
    setErrors(
      validate({...input, season: e.target.value,
      })
    );
  }

  function handleSelectCountry(e) {
    setInput({
      ...input, countries: [...input.countries, e.target.value],
    });
    setErrors(
      validate({...input, countries: [...input.countries, e.target.value],
      })
    );
  }

  function handleDeleteCountry(e) {
    setInput({
      ...input, countries: input.countries.filter((ctry) => ctry !== e),
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
    // history.push("/countries");
  }

  useEffect(() => {
    dispatch(getCountries())
    dispatch(getActivities());
  }, [dispatch]);

  return (
      <div className="create">
      <div >
      <Link to="/countries">
        <button>Back</button>
      </Link>
      <div className="form">
      <h1 className="h10">Create Activity!!!</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChangeName(e)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Duration: </label>
          <input
            type="number"
            value={input.duration}
            name="duration"
            onChange={(e) => handleChangeDuration(e)}
          /> minutes
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
          {errors.difficulty && <p className="error">{errors.difficulty}</p>}
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
          {errors.season && <p className="error">{errors.season}</p>}
        </div>
        <label>Countries: </label>
        <select onChange={(e) => handleSelectCountry(e)}>
          {allCountries &&
                 allCountries.sort((a, b) => {
                      if (a.name > b.name) {
                        return 1;
                      }
                      if (a.name < b.name) {
                        return -1;
                      }
                      return 0;
                    })
          ?.map((ctry) => (
            <option value={ctry.name}>{ctry.name}</option>
          ))}
        </select>
        {errors.countries && <p className="error">{errors.countries}</p>}
        <ul>

          <div className="punto">
          <li>{input.countries.map((ctry) => ctry + " - ")}</li>
          </div>
        </ul>
      </form>
      <div className="buttoncreate">
      <button type="submit">Create Activity</button>{" "}
      </div>
      <div className="remove">     
      {input.countries.map((ctry) => (
        <div className="delete">
          <p>{ctry} <button onClick={() => handleDeleteCountry(ctry)}> X </button> - </p>
          
        </div>
      ))}
      </div> 
      </div>
    </div>
    </div>
    );
  }