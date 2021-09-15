
import React from "react";

import { Link } from "react-router-dom";
//importo los hooks q voy a usar de react
import { useState, useEffect } from "react";
//importo los hooks q voy a usar de react-redux(los instalo)
import { useDispatch, useSelector } from "react-redux";
//importo las actions que me interesa usar en este componente
import {  getCountries,  getActivities } from "../../redux/actions"; 

import NavBar from "../NavBar//NavBar";
import OrderName from "../OrderFilter/OrderName/OrderName";
import OrderPopulation from "../OrderFilter/OrderPopulation/OrderPopulation";
import FilterContinent from "../OrderFilter/FilterContinent/FilterContinent.jsx";
import FilterActivity from "../OrderFilter/FilterActivity/FilterActivity.jsx";
import Pagination from "../Pagination/Pagination";
import CardCountries from "../CardCountry/CardCountries";

import style from "./Home.module.css"




//COMIENZA EL COMPONENTE
export default function Home(){
   
    const dispatch = useDispatch() 
    const allCountries = useSelector ((state) => state.countries)
    const activities = useSelector ((state) => state.activities)

//OREDENAMIENTO
    const [order, setOrder] = useState("")

//PAGINADO
    const [currentPage,setCurrentPage] = useState(1)
    const [countriesPerPage,setcountriesPerPage] = useState(9)
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirtsCountry = indexOfLastCountry - countriesPerPage
    const currentCountries = allCountries.slice(indexOfFirtsCountry,indexOfLastCountry)

    const pagination = (pageNumber) => {//es la q me a ayudar al renderizado
        setCurrentPage(pageNumber) 
    }

    useEffect (() => {
        dispatch(getCountries());
        dispatch(getActivities())//ver
            },[dispatch])//


return (//ver frangment
    <div >
        <div>
          <NavBar/>  
        <fragment className={style.filter}>
        <label className={style.orderlabel}><OrderName setCurrentPage={setCurrentPage} setOrder={setOrder} />
        <OrderPopulation setCurrentPage={setCurrentPage} setOrder={setOrder} /></label>
        <label> <FilterContinent/>
        <FilterActivity allActivities={activities}/></label>
        </fragment>
        <div> 
            <div> 
                <Pagination 
                 countriesPerPage= {countriesPerPage} allCountries={allCountries.length} pagination={pagination}
                 />
            </div>      
        </div>
        <div className={style.container}>
        {currentCountries && currentCountries.map((ctry) => {
            return (
                <Link to={"/details/" + ctry.id}>    
                    <CardCountries name={ctry.name} flag={ctry.flag} continent={ctry.continent} key={ctry.id}/>
                </Link> 
        );
    })
}
</div>
        </div>
    </div>

)
} 


