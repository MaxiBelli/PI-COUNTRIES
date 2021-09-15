import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByName } from "../../../redux/actions"


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
            <h3 className="orderfilter">Order By:</h3>
            <select onChange={e => handleSortName(e)}>
                 <option>-Name-</option>
                <option value = "asc">Ascendent</option>
                <option value = "desc">Descendent</option>
            </select>
        </div>
    )
}