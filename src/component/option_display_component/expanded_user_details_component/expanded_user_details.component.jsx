
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
  let {cell, email, firstName, lastName, phone, 
            picture, age, streetNumber,
             streetName, state, country, dateJoined} = viewMoredetails ;
  
    return (
        <ParentDiv>
            <BackNavigatorHolder onClick = {()=>dispatch(getNormalView())}>
                <BackArrow><Arrow /></BackArrow>
                <Result>Result</Result>
            </BackNavigatorHolder>
            <UderDetails>
                <ImageHolder url = {picture} />
                <DetailsHolder>
                    <NameAndAgeHolder>
                        <NameHolder>{firstName}, {" "} {lastName}</NameHolder>
                        <AgeHolder>{age}</AgeHolder>
                    </NameAndAgeHolder>
                    <AddressHolder>
                        <AddressDetails>{streetNumber},{" "} {streetName},{" "} {state},{" "} {country}</AddressDetails>
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
