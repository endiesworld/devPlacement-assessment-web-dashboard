/** 
    THE ROOT REDUCER IS CONSUMED/USED IN REACT-REDUX LIBRARY. THIS LIBRARY INJECTS 
    THE APP STATE AND THE ACTION FIRED/DISPATCHED 
 **/

 import { combineReducers } from "redux";

 import userReducer from "./reducers/user_type_reducer";

 const rootReducer = combineReducers({
  userType: userReducer,
});

export default  rootReducer;