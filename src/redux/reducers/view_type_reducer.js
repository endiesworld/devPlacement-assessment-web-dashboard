import {view} from "../actions/view_type_action" ;

const initialState = {
    viewType: "Normal"
}

 const viewReducer = (state = initialState , action) => {
    switch(action.type){
        case view.normal : return{
            ...state, viewType: view.normal
        }
         case view.expanded : return{
            ...state,
             viewType: view.expanded,
             viewMoredetails: action.payload
        }
        
        default: return state
    }
}

export default viewReducer ;