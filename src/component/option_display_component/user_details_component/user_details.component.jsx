import React from 'react' ;
import { useDispatch } from "react-redux";

import {getExpandedView} from "../../../redux/actions/view_type_action" ;
import {ReactComponent as Phone} from "../../../assets/phone-call.svg" ;
import {ReactComponent as Message} from "../../../assets/mail.svg" ;
import {ReactComponent as Arrow} from "../../../assets/arrow-right.svg" ;
import {UserDetailsParent, ImageHolder, DetailsHolder, MoreDetails,
        NameHolder, AddressHolder, ContactDetails, IconHolder,
            Details, MoreDeatilsButton} from "./user_details.component.style" ;

function UserDetailsComponent({userDetails}) {
    const dispatch = useDispatch() ;
    let defaultValue = {
        name: "Shalum Chioma" ,
        address: "123, kilode, Lagos" ,
        email: "name@address.com",
        phoneNumber: "+234-80123987456"
    }
    let name ;
    let address ;
    let email ;
    let phoneNumber;

    (userDetails) ? ({name, address, email, phoneNumber} = userDetails ) : 
     ({name, address, email, phoneNumber} = defaultValue  ) ;

    return (
        <UserDetailsParent>
            <ImageHolder />
            <DetailsHolder>
                <NameHolder>{name}</NameHolder>
                <AddressHolder>{address}</AddressHolder>
                <ContactDetails>
                    <IconHolder><Message /></IconHolder>
                    <Details>{email}</Details>
                    <IconHolder><Phone /></IconHolder>
                    <Details>{phoneNumber}</Details>
                </ContactDetails>
            </DetailsHolder>
            <MoreDetails><MoreDeatilsButton onClick = {() => dispatch(getExpandedView())}>
                <Arrow />
            </MoreDeatilsButton></MoreDetails>
        </UserDetailsParent>
    )
}

export default UserDetailsComponent ;
