import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCountriesByActivity } from "../actions";


export default function FilterActivity (allActivities){

    const dispatch = useDispatch();
    
    function handleFilterActivity(e){
        dispatch(filterCountriesByActivity(e.target.value))
    }

    return(
        <div>
            <select onChange={e => handleFilterActivity(e)}>
            <option value = "-Activity-">Activity</option>
          {allActivities
            ? allActivities.map((el) => {
                return <option value = {`${el.name}`} >{el.name}</option>;
              })
            : ""}
            </select>
        </div>
    )
}