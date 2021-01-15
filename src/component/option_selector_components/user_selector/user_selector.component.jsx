import React from 'react' ;
import { useDispatch } from "react-redux";


import {UserSelectorParent,  UserSelectorHolder, SelectorMessage,
    UserTypeHolder, AllUsers, MaleUsersSelector, FemaleUsersSelector,
     UserSelectorMessage,   } from "./user_selector.component.styled" ;
import {ReactComponent as Users} from "../../../assets/usersSolid.svg" ;   
import {ReactComponent as MaleUsers} from "../../../assets/male-solid.svg" ;
import {ReactComponent as FemaleUsers} from "../../../assets/female-solid.svg" ;  

import { fetchFemaleUsers, fetchMaleUsers, fetchAllUsers} from "../../../redux/actions/users_actions" ;

function UserSelector(){    
    const dispatch = useDispatch() ;
    return (
        <UserSelectorParent>
            <SelectorMessage>Show Users</SelectorMessage>
            <UserSelectorHolder>
                <UserTypeHolder>
                    <AllUsers onClick= {()=>dispatch(fetchAllUsers())}><Users style ={{width: "50%", height: "50%"}} /></AllUsers>
                    <UserSelectorMessage>All Users</UserSelectorMessage>
                </UserTypeHolder>
                <UserTypeHolder>
                    <MaleUsersSelector onClick= {()=>dispatch(fetchMaleUsers())}><MaleUsers style ={{width: "50%", height: "50%"}} /></MaleUsersSelector>
                    <UserSelectorMessage>Male Users</UserSelectorMessage>
                </UserTypeHolder>
                <UserTypeHolder>
                    <FemaleUsersSelector onClick= {()=>dispatch(fetchFemaleUsers())}><FemaleUsers style ={{width: "50%", height: "50%"}} /></FemaleUsersSelector>
                    <UserSelectorMessage>Female Users</UserSelectorMessage>
                </UserTypeHolder>
            </UserSelectorHolder>
        </UserSelectorParent>
    )
}


export default UserSelector ;
