import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByName } from "../actions";


export default function OrderName ({ setCurrentPage, setOrder}){

    const dispatch = useDispatch();
    
    function handleSortName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);//cuando seteo esta pag
        setOrder(e.target.value)//me modifique el estado local y se renderize
    }

    return(
        <div>
            <h3>Order By:</h3>
            <select onChange={e => handleSortName(e)}>
                 <option>-Name-</option>
                <option value = "asc">Ascendente</option>
                <option value = "desc">Descendente</option>
            </select>
        </div>
    )
}