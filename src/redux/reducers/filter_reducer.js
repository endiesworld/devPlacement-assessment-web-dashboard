import {SHOW_COUNTRY ,COUNTRY, 
    FILTER } from "../actions/filter_actions" ;

 


const initialState = {
    showCountry: false ,
    userCountry: "country",
    filter: "" 
}    

const filterReducer = (state = initialState , action) => {
    switch(action.type){
        case SHOW_COUNTRY : return{
            ...state, 
            showCountry: action.payload
        }
         case COUNTRY : return{
            ...state, 
            userCountry: action.payload,
        }
         case FILTER : return{
            ...state, 
            filter: action.payload
        }
        default: return state
    }
}

export default filterReducer ;
