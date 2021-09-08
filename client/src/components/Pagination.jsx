import React from "react";


export default function Pagination ({countriesPerPage, allCountries, pagination}){//me las traigo como props del otro comp
    const pageNumbers = []


    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        i < 10 ? pageNumbers.push("0" + i) : pageNumbers.push(i);
      }

    return (
        <nav>
            <ul className="paginado" key="paginado">
                { pageNumbers && 
                pageNumbers.map(number => (
                    
                    <li className="number" key= {number}>
                        <a onClick={() => pagination(number)}>{number}</a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}