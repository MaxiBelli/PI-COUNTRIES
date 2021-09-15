import React from "react";
import style from "./Pagination.module.css"

export default function Pagination ({countriesPerPage, allCountries, pagination}){
    const pageNumbers = []


    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        i < 10 ? pageNumbers.push("0" + i) : pageNumbers.push(i);
      }

    return (
        <nav>
            <ul className={style.pagination} key="pagination">
                { pageNumbers && 
                pageNumbers.map(number => (
                    <button className={style.pagenumber}>
                    <li className={style.pagenumber} key= {number}>
                        <a onClick={() => pagination(number)}>{number}</a>
                    </li>
                    </button>
                ))}

            </ul>
        </nav>
    )
}