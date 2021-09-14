import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByPopulation } from "../actions";


export default function OrderPopulation ({ setCurrentPage, setOrder}){

    const dispatch = useDispatch();
    
    function handleSortPopulation(e){
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value))
        setCurrentPage(1);//cuando seteo esta pag
        setOrder(e.target.value)//me modifique el estado local y se renderize
    }

    return(
        <div>
            {/* <h3>Order By:</h3> */}
            <select onChange={e => handleSortPopulation(e)}>
                 <option>-Population-</option>
                <option value = "mayor">Mayor</option>
                <option value = "menor">Menor</option>
            </select>
        </div>
    )
}