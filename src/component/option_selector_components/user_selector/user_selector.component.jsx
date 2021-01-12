import React from 'react' ;
import {UserSelectorParent,  UserSelectorHolder, SelectorMessage,
    UserTypeHolder, AllUsers, MaleUsersSelector, FemaleUsersSelector,
     UserSelectorMessage,   } from "./user_selector.component.styled" ;
import {ReactComponent as Users} from "../../../assets/usersSolid.svg" ;   
import {ReactComponent as MaleUsers} from "../../../assets/male-solid.svg" ;
import {ReactComponent as FemaleUsers} from "../../../assets/female-solid.svg" ;  

function UserSelector() {
    return (
        <UserSelectorParent>
            <SelectorMessage>Show Users</SelectorMessage>
            <UserSelectorHolder>
                <UserTypeHolder>
                    <AllUsers><Users style ={{width: "50%", height: "50%"}} /></AllUsers>
                    <UserSelectorMessage>All Useers</UserSelectorMessage>
                </UserTypeHolder>
                <UserTypeHolder>
                    <MaleUsersSelector><MaleUsers style ={{width: "50%", height: "50%"}} /></MaleUsersSelector>
                    <UserSelectorMessage>Male Useers</UserSelectorMessage>
                </UserTypeHolder>
                <UserTypeHolder>
                    <FemaleUsersSelector><FemaleUsers style ={{width: "50%", height: "50%"}} /></FemaleUsersSelector>
                    <UserSelectorMessage>Female Useers</UserSelectorMessage>
                </UserTypeHolder>
            </UserSelectorHolder>
        </UserSelectorParent>
    )
}

export default UserSelector ;
