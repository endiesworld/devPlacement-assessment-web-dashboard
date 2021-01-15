import React from 'react' ;
import { useDispatch , useSelector } from "react-redux";

import {getExpandedView} from "../../../redux/actions/view_type_action" ;
import {ReactComponent as Phone} from "../../../assets/phone-call.svg" ;
import {ReactComponent as Message} from "../../../assets/mail.svg" ;
import {ReactComponent as Arrow} from "../../../assets/arrow-right.svg" ;
import {ParentDiv,UserDetailsParent, ImageHolder, DetailsHolder, MoreDetails,
        NameHolder, AddressHolder, ContactDetails, IconHolder,
            Details, MoreDeatilsButton} from "./user_details.component.style" ;
import {userDetailsExtractor} from "./userDetails" ;

function UserDetailsComponent() {
    const {loading} = useSelector(state => state.loading) ;
    console.log(loading) ;
    const {users} = useSelector(state => state.users) ;
    
    const displayUsers = userDetailsExtractor(users) ;
    const dispatch = useDispatch() ;
    
    return (
        <ParentDiv>
        {
                displayUsers.map((user, index) => (
        <UserDetailsParent key= {index} >
            <ImageHolder url = {user.picture.large}/>
            <DetailsHolder>
                <NameHolder>{user.name.first }, { " "} {user.name.last}</NameHolder>
                <AddressHolder>
                    {user.location.street.number}, { " "}
                    {user.location.street.name},
                    { " "}
                    {user.location.state},
                </AddressHolder>
                <ContactDetails>
                    <IconHolder><Message /></IconHolder>
                    <Details>{user.email}</Details>
                    <IconHolder><Phone /></IconHolder>
                    <Details>{user.phone}</Details>
                </ContactDetails>
            </DetailsHolder>
            <MoreDetails><MoreDeatilsButton onClick = {() => dispatch(getExpandedView(user))}>
                <Arrow />
            </MoreDeatilsButton></MoreDetails>

        </UserDetailsParent>
                 ))} 
    </ParentDiv>
    )
}

export default UserDetailsComponent ;
