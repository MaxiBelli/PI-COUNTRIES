import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCountriesByActivity } from "../../../redux/actions";


export default function FilterActivity ({allActivities}){

    const dispatch = useDispatch();
    
    function handleFilterActivity(e){
        dispatch(filterCountriesByActivity(e.target.value))
    }

    return(
        <div>
            {/* <h3>Filtered By:</h3>   */}
            <select onChange={e => handleFilterActivity(e)}>
            <option value = "all">-Activity-</option>
          {allActivities
            && allActivities.map((el) => {
                return <option key= {el.id} value = {`${el.name}`} >{el.name}</option>;
              })
            }
            </select>
        </div>
    )
}