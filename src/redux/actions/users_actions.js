import axios from "axios" ;

import {getAllUsers, getFemaleUsers, getMaleUsers} from "./user_type_action" ;

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST" ;
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS" ;
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE" ;


export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST ,
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS ,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE ,
        payload: error
    }
}


export const fetchAllUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://randomuser.me/api/?results=5')
        .then(response => {
            const users = response.data
            dispatch(fetchUsersSuccess(users)) ;
            dispatch(getAllUsers()) ;
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}

export const fetchFemaleUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://randomuser.me/api/?gender=female')
        .then(response => {
            const users = response.data
            dispatch(fetchUsersSuccess(users)) ;
            dispatch(getFemaleUsers()) ;
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}

export const fetchMaleUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://randomuser.me/api/?gender=male')
        .then(response => {
            const users = response.data
            dispatch(fetchUsersSuccess(users)) ;
            dispatch(getMaleUsers()) ;
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}