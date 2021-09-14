
import React from "react";

import { Link } from "react-router-dom";
//importo los hooks q voy a usar de react
import { useState, useEffect } from "react";
//importo los hooks q voy a usar de react-redux(los instalo)
import { useDispatch, useSelector } from "react-redux";
//importo las actions que me interesa usar en este componente
import {  getCountries,  getActivities } from "../actions"; 

import CardCountries from "./CardCountries";
import Pagination from "./Pagination";
import OrderName from "./OrderName";
import OrderPopulation from "./OrderPopulation";
import FilterContinent from "./FilterContinent";
import FilterActivity from "./FilterActivity.jsx";
import NavBar from "./NavBar";

import "./Home.css"




//COMIENZA EL COMPONENTE
export default function Home(){
   
    const dispatch = useDispatch() 
    const allCountries = useSelector ((state) => state.countries)
    const activities = useSelector ((state) => state.activities)

//OREDENAMIENTO
    const [order, setOrder] = useState("")

//PAGINADO
    const [currentPage,setCurrentPage] = useState(1)//me guardo en estado local la pag actual y una q me la setea.(1) xq arranca en la primer pag
    const [countriesPerPage,setcountriesPerPage] = useState(9)//personajes x pagina.(6)xq va a haber 6 personajes x pagina
    const indexOfLastCountry = currentPage * countriesPerPage // 6
    const indexOfFirtsCountry = indexOfLastCountry - countriesPerPage //0
    const currentCountries = allCountries.slice(indexOfFirtsCountry,indexOfLastCountry)//personajes a renderizar dependiendo de la pag

    const pagination = (pageNumber) => {//es la q me a ayudar al renderizado
        setCurrentPage(pageNumber) 
    }

    useEffect (() => {
        dispatch(getCountries());
        dispatch(getActivities())
            },[dispatch])//


return (
    <div >
        <div>
          <NavBar/>  
        <div className="filter">
        <label className="orderlabel"><OrderName setCurrentPage={setCurrentPage} setOrder={setOrder} />
        <OrderPopulation setCurrentPage={setCurrentPage} setOrder={setOrder} /></label>
        <label> <FilterContinent/>
        <FilterActivity allActivities={activities}/></label>
        </div>
        <div> 
            <div> 
                <Pagination 
                 countriesPerPage= {countriesPerPage} allCountries={allCountries.length}   pagination={pagination} />
            </div>      
        </div>
        <div className="container">
        {currentCountries && currentCountries.map((ctry) => {
            return (
          
                <Link to={"/details/" + ctry.id}>    
                    <CardCountries name={ctry.name} flag={ctry.flag} continent={ctry.continent} population={ctry.population} key={ctry.id}/>
                </Link> 
           
        );
    })
}
</div>
        </div>
    </div>

)
} 


// //c.img? c.img : <img src="url..."/> //para poner una imgen por default 