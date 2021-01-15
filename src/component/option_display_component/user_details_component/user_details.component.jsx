import React from 'react' ;
import { useDispatch , useSelector } from "react-redux";

import {getExpandedView} from "../../../redux/actions/view_type_action" ;


import {ReactComponent as Phone} from "../../../assets/phone-call.svg" ;
import {ReactComponent as Message} from "../../../assets/mail.svg" ;
import {ReactComponent as Arrow} from "../../../assets/arrow-right.svg" ;
import {ParentDiv,UserDetailsParent, ImageHolder, DetailsHolder, MoreDetails,
        NameHolder, AddressHolder, Address, ContactDetails, IconHolder,
            Details, MoreDeatilsButton} from "./user_details.component.style" ;
import {userDetailsExtractor} from "./userDetails" ;

function UserDetailsComponent() {
    //const {loading} = useSelector(state => state.loading) ;
    const {users} = useSelector(state => state.users) ;
    //const {userCountry} = useSelector(state => state.userCountry)
    const {showCountry} = useSelector(state => state.showCountry) ;
    let displayUsers = userDetailsExtractor(users) ;
    
    const dispatch = useDispatch() ;
    

    return (
        <ParentDiv>
        {
                displayUsers.map((user, index ) => (
        <UserDetailsParent key={index} >
            <ImageHolder url = {user.picture}/>
            <DetailsHolder>
                <NameHolder>{user.firstName}, { " "} {user.lastName}</NameHolder>
                <AddressHolder>
                    <Address>
                        {user.streetNumber}, { " "}
                        {user.streetName},
                        { " "}
                        {user.state}
                    </Address>
                    { (showCountry) ? 
                    <Address>,{" "}{user.country}</Address> 
                    : ""}
                </AddressHolder>
                <ContactDetails>
                    <IconHolder><Message /></IconHolder>
                    <Details>{user.email}</Details>
                    <IconHolder><Phone /></IconHolder>
                    <Details>{user.cell}</Details>
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
