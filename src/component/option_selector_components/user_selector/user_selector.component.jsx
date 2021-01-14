import React from 'react' ;
import { useDispatch } from "react-redux";


import {UserSelectorParent,  UserSelectorHolder, SelectorMessage,
    UserTypeHolder, AllUsers, MaleUsersSelector, FemaleUsersSelector,
     UserSelectorMessage,   } from "./user_selector.component.styled" ;
import {ReactComponent as Users} from "../../../assets/usersSolid.svg" ;   
import {ReactComponent as MaleUsers} from "../../../assets/male-solid.svg" ;
import {ReactComponent as FemaleUsers} from "../../../assets/female-solid.svg" ;  

import {getAllUsers, getFemaleUsers, getMaleUsers} from "../../../redux/actions/user_type_action" ;

function UserSelector(){    
    const dispatch = useDispatch() ;
    return (
        <UserSelectorParent>
            <SelectorMessage>Show Users</SelectorMessage>
            <UserSelectorHolder>
                <UserTypeHolder>
                    <AllUsers onClick= {()=>dispatch(getAllUsers())}><Users style ={{width: "50%", height: "50%"}} /></AllUsers>
                    <UserSelectorMessage>All Users</UserSelectorMessage>
                </UserTypeHolder>
                <UserTypeHolder>
                    <MaleUsersSelector onClick= {()=>dispatch(getMaleUsers())}><MaleUsers style ={{width: "50%", height: "50%"}} /></MaleUsersSelector>
                    <UserSelectorMessage>Male Users</UserSelectorMessage>
                </UserTypeHolder>
                <UserTypeHolder>
                    <FemaleUsersSelector onClick= {()=>dispatch(getFemaleUsers())}><FemaleUsers style ={{width: "50%", height: "50%"}} /></FemaleUsersSelector>
                    <UserSelectorMessage>Female Users</UserSelectorMessage>
                </UserTypeHolder>
            </UserSelectorHolder>
        </UserSelectorParent>
    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//         showAllUsers: () => dispatch(getAllUsers()) ,
//         showMaleUsers: () => dispatch(getMaleUsers()),
//         showFemaleUsers: () => dispatch(getFemaleUsers())
//     }
// }

export default UserSelector ;
