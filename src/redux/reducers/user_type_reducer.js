import {users} from "../actions/user_type_action" ;

const initialState = {
    userType: "Select user Type"
}

 const userTypeReducer = (state = initialState , action) => {
    switch(action.type){
        case users.all : return{
            ...state, userType: users.all
        }
         case users.female : return{
            ...state, userType: users.female
        }
         case users.male : return{
            ...state, userType: users.male
        }
        default: return state
    }
}

export default userTypeReducer ;