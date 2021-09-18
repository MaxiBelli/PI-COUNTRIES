import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountries,
  getActivities,
  orderByName,
  orderByPopulation,
  filterCountriesByContinent,
  filterCountriesByActivity,
  orderByGini
} from "../../redux/actions";
import NavBar from "../NavBar//NavBar";

import Pagination from "../Pagination/Pagination";
import CardCountries from "../CardCountry/CardCountries";
import style from "./Home.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);
  const allActivities = useSelector((state) => state.activities);

  const [order, setOrder] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setcountriesPerPage] = useState(9);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirtsCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = allCountries.slice(
    indexOfFirtsCountry,
    indexOfLastCountry
  );

  const pagination = (pageNumber) => {//es la q me a ayudar al renderizado
    setCurrentPage(pageNumber) 
}

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities()); //ver
  }, [dispatch]); //

  function handleSortName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleSortPopulation(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleSortGini(e) {
    e.preventDefault();
    dispatch(orderByGini(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleFilterContinent(e) {
    dispatch(filterCountriesByContinent(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterActivity(e) {
    dispatch(filterCountriesByActivity(e.target.value));
    setCurrentPage(1);
  }

  return (
    //ver frangment
    <div>
      <div>
        <NavBar />
        <fragment className={style.filter}>
          <label className={style.orderlabel}>
          <h3>Ordered By:</h3>
            <select onChange={(e) => handleSortName(e)}>
              <option>-Name-</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
            <select onChange={(e) => handleSortPopulation(e)}>
              <option>-Population-</option>
              <option value="mayor">Higher</option>
              <option value="menor">Lower</option>
            </select>
            <select onChange={(e) => handleSortGini(e)}>
              <option>-Gini-</option>
              <option value="mayor">Higher</option>
              <option value="menor">Lower</option>
            </select>
          </label>
          <label>
            {" "}
            <h3>Filtered By:</h3>
            <select onChange={(e) => handleFilterContinent(e)}>
              <option value="all">-Continent-</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
            <select onChange={(e) => handleFilterActivity(e)}>
              <option value="all">-Activity-</option>
              {allActivities &&
                allActivities.map((el) => {
                  return (
                    <option key={el.id} value={`${el.name}`}>
                      {el.name}
                    </option>
                  );
                })}
            </select>
          </label>
        </fragment>
        <div>
          <div>
          <Pagination 
                 countriesPerPage= {countriesPerPage} allCountries={allCountries.length} pagination={pagination}
                 />
          </div>
        </div>
        <div className={style.container}>
          {currentCountries &&
            currentCountries.map((ctry) => {
              return (
                <Link to={"/details/" + ctry.id}>
                  <CardCountries
                    name={ctry.name}
                    flag={ctry.flag}
                    continent={ctry.continent}
                    population=  {ctry.population}
                    gini={ctry.gini}
                    key={ctry.id}
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
