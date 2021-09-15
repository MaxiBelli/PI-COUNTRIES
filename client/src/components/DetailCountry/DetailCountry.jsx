import React  from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getDetailCountry } from "../../redux/actions"
import { useDispatch , useSelector } from "react-redux";
import Activity from "../Activity/Activity"
import Loading from "../Loading"
import style from "./DetailCountry.module.css"

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
        <button className={style.button}>Back</button>
      </Link>
      {country && country.id !== id ? (
       <Loading/>
      ) : (
        <div >
          <div className={style.detailcountry}>
         <div className={style.left}>
         <label> <h1>{country.name} ({country.id})</h1></label>
          {/* <h2>({country.id})</h2> */}
          {country.subregion || country.continent ? <h3>{country.continent} ({country.subregion})</h3> : null}
          </div>
          <div className={style.center}>
          <img src={country.flag} alt= "no hay imagen" width="400vw" height="250vw"/>
          </div>
          <div className={style.rigth}>
          {country.capital ? <h2 className="h ">CAPITAL: {country.capital}</h2> : null} 
          <h2>POPULATION: {new Intl.NumberFormat('es-ES').format(country.population)} hab.</h2>
          <h2>AREA: {new Intl.NumberFormat('es-ES').format(country.area)} km2. </h2>
          </div>
             </div>
          <h2>ACTIVITIES:</h2>
            <div className={style.ctryact}>
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
