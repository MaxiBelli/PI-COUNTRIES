import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDetailCountry } from "../actions/index";
import { useDispatch , useSelector } from "react-redux";
import Activity from "./Activity";


export default function Detail(props){
    console.log(props)
    // const [loading, setLoading] = useState(false)
    const {id} = props.match.params;
    const dispatch = useDispatch()
    const country = useSelector ((state) => state.detailCountry)


    useEffect(() => {
      dispatch(getDetailCountry(id));
    }, []);



return (
    <div>
      {country && country.id !== id ? (
       <p>Loading...</p>
      ) : (
        <div>
          <h1>{country.name}</h1>
          <h2>({country.id})</h2>
          <img src={country.flag} alt= "no hay imagen"/>
          {country.capital ? <h2>Capital: {country.capital}</h2> : null}
          <h3>Continent: {country.continent}</h3> 
          {country.subregion ? <h4> {country.subregion}</h4> : null}
          <h4>Population: {country.population} hab.</h4>
          <h4>Area: {country.area} km2 </h4>
          <h4>
            Activities:
            {country.activities && country.activities.length > 0
                ? country.activities.map((el) => (
                    <Activity
                      name={el.name}
                      duration={el.duration}
                      season={el.season}
                      difficulty={el.difficulty}
                    />
                  ))
                : null}
          </h4>
        </div>
      ) 
        
      }
      <Link to="/countries">
        <button>Back</button>
      </Link>
    </div>
  );
}
