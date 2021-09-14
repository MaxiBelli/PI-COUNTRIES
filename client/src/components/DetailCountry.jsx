import React  from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getDetailCountry } from "../actions/index";
import { useDispatch , useSelector } from "react-redux";
import Activity from "./Activity";
import Loading from "./Loading"
import "./DetailCountry.css"

export default function DetailCountry (props){
    console.log(props)
    // const [loading, setLoading] = useState(false)
    const {id} = props.match.params;
    const dispatch = useDispatch()
    const country = useSelector ((state) => state.detailCountry)


    useEffect(() => {
      dispatch(getDetailCountry(id));
    }, [dispatch, id]);



return (
    <div >
       <Link to="/countries">
        <button className="button">Back</button>
      </Link>
      {country && country.id !== id ? (
       <Loading/>
      ) : (
        <div >
          <div className="detailcountry">
         <div className="left">
         <label> <h1>{country.name} ({country.id})</h1></label>
          {/* <h2>({country.id})</h2> */}
          {country.subregion || country.continent ? <h3>{country.continent} ({country.subregion})</h3> : null}
          </div>
          <div className="center">
          <img src={country.flag} alt= "no hay imagen" width="400vw" height="250vw"/>
          </div>
          <div className="rigth">
          {country.capital ? <h2>Capital: {country.capital}</h2> : null}
           <h4> </h4> 
          <h2>Population: {new Intl.NumberFormat('es-ES').format(country.population)} hab.</h2>
          <h2>Area: {new Intl.NumberFormat('es-ES').format(country.area)} km2. </h2>
          </div>
             </div>
          <h2>Activities:</h2>
            <div className="ctryact">
            {country.activities && country.activities.length > 0
                ? country.activities.map((el) => (
                    <Activity
                      name={el.name}
                      duration={el.duration}
                      season={el.season}
                      difficulty={el.difficulty}
                    />
                  ))
                : <h3>no registered</h3>}
          
          </div>
        </div>
      ) 
        
      }
     
    </div>
  );
}
