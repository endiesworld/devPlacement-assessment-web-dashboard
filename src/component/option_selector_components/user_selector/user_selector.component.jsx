import React from 'react' ;
import { connect } from "react-redux";

import {UserSelectorParent,  UserSelectorHolder, SelectorMessage,
    UserTypeHolder, AllUsers, MaleUsersSelector, FemaleUsersSelector,
     UserSelectorMessage,   } from "./user_selector.component.styled" ;
import {ReactComponent as Users} from "../../../assets/usersSolid.svg" ;   
import {ReactComponent as MaleUsers} from "../../../assets/male-solid.svg" ;
import {ReactComponent as FemaleUsers} from "../../../assets/female-solid.svg" ;  

import {getAllUsers, getFemaleUsers, getMaleUsers} from "../../../redux/actions/user_type_action" ;

function UserSelector({showAllUsers, showFemaleUsers, showMaleUsers}){
    return (
        <UserSelectorParent>
            <SelectorMessage>Show Users</SelectorMessage>
            <UserSelectorHolder>
                <UserTypeHolder>
                    <AllUsers onClick= {()=>showAllUsers()}><Users style ={{width: "50%", height: "50%"}} /></AllUsers>
                    <UserSelectorMessage>All Useers</UserSelectorMessage>
                </UserTypeHolder>
                <UserTypeHolder>
                    <MaleUsersSelector onClick= {()=>showMaleUsers()}><MaleUsers style ={{width: "50%", height: "50%"}} /></MaleUsersSelector>
                    <UserSelectorMessage>Male Useers</UserSelectorMessage>
                </UserTypeHolder>
                <UserTypeHolder>
                    <FemaleUsersSelector onClick= {()=>showFemaleUsers()}><FemaleUsers style ={{width: "50%", height: "50%"}} /></FemaleUsersSelector>
                    <UserSelectorMessage>Female Useers</UserSelectorMessage>
                </UserTypeHolder>
            </UserSelectorHolder>
        </UserSelectorParent>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        showAllUsers: () => dispatch(getAllUsers()) ,
        showMaleUsers: () => dispatch(getMaleUsers()),
        showFemaleUsers: () => dispatch(getFemaleUsers())
    }
}

export default connect(null, mapDispatchToProps) (UserSelector) ;
