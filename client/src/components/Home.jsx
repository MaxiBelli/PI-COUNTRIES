import React from "react";

import { Link } from "react-router-dom";
//importo los hooks q voy a usar de react
import { useState, useEffect } from "react";
//importo los hooks q voy a usar de react-redux(los instalo)
import { useDispatch, useSelector } from "react-redux";
//importo las actions que me interesa usar en este componente
import {  getCountries,  getActivities } from "../actions"; 

import Card from "./Card";
import Pagination from "./Pagination";
import OrderName from "./OrderName";
import OrderPopulation from "./OrderPopulation";
import FilterContinent from "./FilterContinent";
import FilterActivity from "./FilterActivity.jsx";
import NavBar from "./NavBar";




//COMIENZA EL COMPONENTE
export default function Home(){
   
    const dispatch = useDispatch() 
    const allCountries = useSelector ((state) => state.countries)
    const activities = useSelector ((state) => state.activities)

//OREDENAMIENTO
    const [order, setOrder] = useState("")

//PAGINADO
    const [currentPage,setCurrentPage] = useState(1)//me guardo en estado local la pag actual y una q me la setea.(1) xq arranca en la primer pag
    const [countriesPerPage,setcountriesPerPage] = useState(10)//personajes x pagina.(6)xq va a haber 6 personajes x pagina
    const indexOfLastCountry = currentPage * countriesPerPage // 6
    const indexOfFirtsCountry = indexOfLastCountry - countriesPerPage //0
    const currentCountries = allCountries.slice(indexOfFirtsCountry,indexOfLastCountry)//personajes a renderizar dependiendo de la pag

    const pagination = (pageNumber) => {//es la q me a ayudar al renderizado
        setCurrentPage(pageNumber) 
    }

//Hook useEffect: Este recibe un callback que se ejecuta despues de cada renderizado en el componente, y nos permite hacer peticiones de datos, 
//establecimiento de suscripciones y actualizaciones manuales del DOM en componentes de React. Llamamos a estas operaciones “efectos secundarios” o “efectos”
// Este Hook equivale a los ciclos de vida de clase: componentDidMount, componentDidUpdate y componentWillUnmount combinados. 
//El segundo argumento que recibe es un array, al pasar un array vacio [], esto le indica a React que useEffect no depende de ningún valor
// proveniente de las props o el estado, de modo que no necesita volver a ejecutarse.


    useEffect (() => {//va a cumplir las veces del componentDidMount al momento de montarse el componente
        dispatch(getCountries());
        dispatch(getActivities())////con el useEffect reemplazo la lógica del mapDispatchToProps
            },[dispatch])//



//     function handleClick(e){
//          e.preventDefault();
//          dispatch(getCountries())
// }

//FILTRADOS X STATUS
//     function handleFilterContinent(e){
//         dispatch(filterCountriesByContinent(e.target.value))
// }

// //FILTRADOS X CREADOS O EXISTENTES
    // function handleFilterActivity(e){
    //     dispatch(filterByActivity(e.target.value))
    // }

//ORDENAMIENTO X NOMBRE ASC Y DES
// function handleSortName(e){
//     e.preventDefault();
//     dispatch(orderByName(e.target.value))
//     setCurrentPage(1);//cuando seteo esta pag
//     setOrder(e.target.value)//me modifique el estado local y se renderize
// }
//ORDENAMIENTO X POLBALCION MAYOR Y MENOR
// function handleSortPop(e){
//     e.preventDefault();
//     dispatch(orderByPopulation(e.target.value))
//     setCurrentPage(1);//cuando seteo esta pag
//     setOrder(e.target.value)//me modifique el estado local y se renderize
// }    


return (
    <div >
        <div>
          <NavBar/>  
        <div>
        <OrderName setCurrentPage={setCurrentPage} setOrder={setOrder} />
        <OrderPopulation setCurrentPage={setCurrentPage} setOrder={setOrder} />
        <FilterContinent/>
        {/* <FilterActivity allActivities={activities}/> */}
        </div>
        <div> 
            <div> 
                <Pagination 
                countriesPerPage= {countriesPerPage} allCountries={allCountries.length}   pagination={pagination} />
            </div>      
        </div>
        {currentCountries && currentCountries.map((c) => {
        return (
            <div>
            <div>
                <Link to={"/details/" + c.id}>    
                    <Card name={c.name} flag={c.flag} continent={c.continent} population={c.population} key={c.id}/>
                </Link> 
             </div>
             </div>
        );
    })
}
        </div>
    </div>

)
} 


//c.img? c.img : <img src="url..."/> //para poner una imgen por default 