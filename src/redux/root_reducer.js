/** 
    THE ROOT REDUCER IS CONSUMED/USED IN REACT-REDUX LIBRARY. THIS LIBRARY INJECTS 
    THE APP STATE AND THE ACTION FIRED/DISPATCHED 
 **/

 import { combineReducers } from "redux";

 import userTypeReducer from "./reducers/user_type_reducer";
 import viewReducer from "./reducers/view_type_reducer";
 import userReducer from "./reducers/users_reducer" ;

 const rootReducer = combineReducers({
  userType: userTypeReducer,
  viewType: viewReducer,
  viewMoredetails: viewReducer,
  users: userReducer,
  loading: userReducer,
});

export default  rootReducer;