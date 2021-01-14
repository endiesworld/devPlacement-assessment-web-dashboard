
import React from 'react' ;
import { useDispatch } from "react-redux";

import {getNormalView} from "../../../redux/actions/view_type_action" ;
import {ReactComponent as Arrow} from "../../../assets/arrow-left.svg" ;
import {ReactComponent as Phone} from "../../../assets/phone-call.svg" ;
import {ReactComponent as Iphone} from "../../../assets/iphone.svg" ;
import {ReactComponent as Message} from "../../../assets/mail.svg" ;
import {ParentDiv, BackNavigatorHolder, BackArrow, Result,
         UderDetails, ImageHolder, DetailsHolder,
        NameAndAgeHolder, NameHolder, AgeHolder,
    AddressHolder, AddressDetails, EmailDetailsHolder, 
    DateJoinedHolder, DateJoined, PhoneDetails, IconHolder, Details} from "./expanded_user_details.style" ;

function ExpandedUderDetailsComponent({userDetails}) {
    const dispatch = useDispatch() ;
    let defaultValue = {
        name: "Shalum Chioma" ,
        age: "25",
        address: "123, kilode, Lagos" ,
        dateJoined: "13/1/2021" ,
        email: "name@address.com",
        phoneNumber: "+234-80123987456",
        mobile: "+234-80123987456"
    }
    let name ;
    let address ;
    let email ;
    let phoneNumber;
    let age ;
    let dateJoined ;
    let mobile ;

    (userDetails) ? ({name, address, email, phoneNumber, age, dateJoined, mobile} = userDetails ) : 
     ({name, address, email, phoneNumber, age, dateJoined, mobile} = defaultValue  ) ;
    return (
        <ParentDiv>
            <BackNavigatorHolder onClick = {()=>dispatch(getNormalView())}>
                <BackArrow><Arrow /></BackArrow>
                <Result>Result</Result>
            </BackNavigatorHolder>
            <UderDetails>
                <ImageHolder />
                <DetailsHolder>
                    <NameAndAgeHolder>
                        <NameHolder>{name}</NameHolder>
                        <AgeHolder>{age}</AgeHolder>
                    </NameAndAgeHolder>
                    <AddressHolder>
                        <AddressDetails>{address}</AddressDetails>
                    </AddressHolder>
                     <EmailDetailsHolder>
                        <IconHolder><Message /></IconHolder>
                        <Details>{email}</Details>
                    </EmailDetailsHolder>
                    <DateJoinedHolder>
                        <DateJoined> Joined:  {dateJoined}</DateJoined>
                    </DateJoinedHolder>
                    <PhoneDetails>
                        <IconHolder><Phone /></IconHolder>
                        <Details>{phoneNumber}</Details>
                    </PhoneDetails>
                    <PhoneDetails>
                        <IconHolder style = {{opacity: 0.4}}><Iphone /></IconHolder>
                        <Details>{mobile}</Details>
                    </PhoneDetails>
                </DetailsHolder>
            </UderDetails>
        </ParentDiv>
    )
}

export default ExpandedUderDetailsComponent ;
