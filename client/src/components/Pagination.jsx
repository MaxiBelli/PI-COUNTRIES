import React from "react";
import "./Pagination.css"

export default function Pagination ({countriesPerPage, allCountries, pagination}){//me las traigo como props del otro comp
    const pageNumbers = []


    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        i < 10 ? pageNumbers.push("0" + i) : pageNumbers.push(i);
      }

    return (
        <nav>
            <ul className="pagination" key="pagination">
                { pageNumbers && 
                pageNumbers.map(number => (
                    <button className="pagenumber">
                    <li className="pagenumber" key= {number}>
                        <a onClick={() => pagination(number)}>{number}</a>
                    </li>
                    </button>
                ))}

            </ul>
        </nav>
    )
}