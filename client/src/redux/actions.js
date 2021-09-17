import axios from "axios";


export function getCountries(){
    return async function (dispatch){
        var json = await axios ("http://localhost:3001/countries",
        {

        });
        return dispatch({
            type: "GET_COUNTRIES",
            payload: json.data
        })
    }
}

// export function getCountries(order, filter){
//     return async function (dispatch){
//         var json = await axios ("http://localhost:3001/countries?order="+ order + "&filter=" + filter,
//         {

//         });
//         return dispatch({
//             type: "GET_COUNTRIES",
//             payload: json.data
//         })
//     }
// }

export function getNameCountries(name){
    return async function(dispatch){
        try{
            var json = await axios.get ("http://localhost:3001/countries?name=" + name);
            return dispatch ({
                type: "GET_NAME_COUNTRIES",
                payload: json.data
            })
        } catch (error){
            console.log(error)
        }
    }
}

export function getDetailCountry(id){
    return async function(dispatch){
        try{
            var json = await axios.get (`http://localhost:3001/countries/${id}`);
            return dispatch ({
                type: "GET_DETAIL_COUNTRY",
                payload: json.data
            })
        } catch (error){
            console.log(error)
        }
    }
}

export function filterCountriesByContinent(payload){
        return {
            type: "FILTER_BY_CONTINENT",
            payload

        } 
}

export function filterCountriesByActivity(payload){
    return {
        type: "FILTER_BY_ACTIVITY",
        payload

    } 
}

export function orderByName(payload){
    return {
        type: "ORDER_BY_NAME",
        payload

    } 
}    

export function orderByPopulation(payload){
    return {
        type: "ORDER_BY_POPULATION",
        payload
    
        }             
}


export function getActivities(){
    return async function(dispatch){
        try{
            var info = await axios.get ("http://localhost:3001/activities");
            return dispatch ({
                type: "GET_ACTIVITIES",
                payload: info.data
            })
        } catch (error){
            console.log(error)
        }
    }
}

export function postActivity(payload){
            var response = axios.post ("http://localhost:3001/activities", payload)
            console.log(response)
            return {
                type: "POST_ACTIVITY",
                response
    }
}

// export function postActivity(name, difficulty, duration, season, countries) {
//     axios.post("http://localhost:3001/activities", {
//       name,
//       difficulty,
//       duration,
//       season,
//       countries,
//     });
//   }