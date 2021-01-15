
import React from 'react' ;
import { useDispatch, useSelector } from "react-redux";

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


function ExpandedUderDetailsComponent() {
    const dispatch = useDispatch() ;
    const {viewMoredetails} = useSelector(state => state.viewMoredetails) ;
  let {cell, email, name:{first, last}, phone, picture:{large},
        dob:{age}, location:{street:{number , name}, state, country}, registered:{date}} = viewMoredetails 
    return (
        <ParentDiv>
            <BackNavigatorHolder onClick = {()=>dispatch(getNormalView())}>
                <BackArrow><Arrow /></BackArrow>
                <Result>Result</Result>
            </BackNavigatorHolder>
            <UderDetails>
                <ImageHolder url = {large} />
                <DetailsHolder>
                    <NameAndAgeHolder>
                        <NameHolder>{first}, {" "} {last}</NameHolder>
                        <AgeHolder>{age}</AgeHolder>
                    </NameAndAgeHolder>
                    <AddressHolder>
                        <AddressDetails>{number},{" "} {name},{" "} {state},{" "} {country}</AddressDetails>
                    </AddressHolder>
                     <EmailDetailsHolder>
                        <IconHolder><Message /></IconHolder>
                        <Details>{email}</Details>
                    </EmailDetailsHolder>
                    <DateJoinedHolder>
                        <DateJoined> Joined:  {date}</DateJoined>
                    </DateJoinedHolder>
                    <PhoneDetails>
                        <IconHolder><Phone /></IconHolder>
                        <Details>{phone}</Details>
                    </PhoneDetails>
                    <PhoneDetails>
                        <IconHolder style = {{opacity: 0.4}}><Iphone /></IconHolder>
                        <Details>{cell}</Details>
                    </PhoneDetails>
                </DetailsHolder>
            </UderDetails>
        </ParentDiv>
    )
}

export default ExpandedUderDetailsComponent ;
