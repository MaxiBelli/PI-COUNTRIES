

const initialState = {
    countries : [],
    allCountries : [],
    activities : [],
    detailCountry: {}
}


function rootReducer(state = initialState, action){
    switch(action.type){
        case "GET_COUNTRIES":
            return {
                ...state,
                countries: action.payload, 
                allCountries: action.payload
            }

        case "GET_NAME_COUNTRIES":
            return {
                ...state,
                countries: action.payload //
            }
        
        case "GET_DETAIL_COUNTRY":
            return {
                ...state,
                detailCountry: action.payload //
             }    

        case "GET_ACTIVITIES":
            return {
                 ...state,
                 activities: action.payload //
                }

        case "POST_ACTIVITY":
            return {
                ...state,
            }
        
            case "ORDER_BY_NAME":

                let sortedName = action.payload === "asc" ? 
                state.countries.sort(function(a,b){
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                }) :
                state.countries.sort(function(a,b){
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    countries: sortedName
                }
    
                case "ORDER_BY_POPULATION":
                    
                let sortedPopulation = action.payload === "menor" ? 
                state.countries.sort(function(a, b){
    
                return a.population - b.population}) :
    
                state.countries.sort(function(a, b){
                
                return b.population - a.population}) 
             
                return {
                    ...state,
                    countries: sortedPopulation
                }    

        case "FILTER_BY_CONTINENT":
            const allCountries = state.allCountries
            const continentFiltered = action.payload === "all" ? allCountries : allCountries.filter(el=>  el.continent === action.payload)
            return {
                ...state,
                countries: continentFiltered
            }

        case "FILTER_BY_ACTIVITY":
            const countriesAll = state.allCountries
            const mapeo = countriesAll?.map(el => {
                return {...el, activities: el.activities.map(el => el.name)}
            })
            const activityFiltered = action.payload === 'all' ? countriesAll : mapeo.filter(el => {
                return el.activities.includes(action.payload)
            })
            return {
                    ...state,
                    countries: activityFiltered
                }

            // return {
            //     ...state,
            //     countries: state.countries.filter((c) =>{
            //         return c.activities?.some((a)=> a.name === action.payload)
            //     })
            // } 
        //     let count = state.countries;
        //     let activities = state.activities
        //     let activity = activities.filter(a => a.name === action.payload)
        //     let countriesByActivity = activity[0].countries.map((c) => {return c.id});
        //     let countriesFiltered = count.filter(c => countriesByActivity.includes(c.id))
        //     return {
        //       ...state,
        //       countries: countriesFiltered
        //   }
        

            default:
                return state;
    }

   
}


export default rootReducer