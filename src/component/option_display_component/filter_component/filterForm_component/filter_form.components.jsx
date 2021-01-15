import React,{useRef} from 'react' ;
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";

import {Form, Select, GroupElement, Input, SearchButtton,
    GroupElementSelector, CountryButton, InputForCheckButton, Slidder, CountryLabel 
} from "./filter_form.component.styled" ;

import {showCountry, showUserswithCountry } from "../../../../redux/actions/filter_actions" ;
import {userDetailsExtractor, countryExractor} from "../../user_details_component/userDetails" ;

function FormComponent() {
  const {users} = useSelector(state => state.users) ;
  const displayUsers = userDetailsExtractor(users) ;
  let countries = ["country"] ;
   countries = countries.concat(countryExractor(displayUsers) ) ;

  const showcountry = useRef(false) ;
  const dispatch = useDispatch() ;
const initialValues = {
    country: "",
    showCountry: true ,
    findUser: ""
};
const onSubmit = (values) => {
    let search = JSON.stringify(values, null, 2);
    search = JSON.parse(search) ;
    console.log("user search, ", search) ;
};
    const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
        <GroupElement>
                <Input
                    placeholder= "Find a user"
                    required
                    autoComplete= "on"
                    name="findUser"
                    onChange={formik.handleChange}
                    value={formik.values.findUser}
                />
                <SearchButtton type="submit"><i className="fa fa-search"></i></SearchButtton>
                </GroupElement>          
        <Select
              placeholder= "country"
              name= "country"
              onChange={formik.handleChange}
              value={formik.values.country}
              onBlur ={()=>
                dispatch(showUserswithCountry(formik.values.country))}
        >
              {countries.map((value, index2) => (
                <option key={index2} value={value}>
                  {value}
                </option>
              ))}
        </Select>
        <GroupElementSelector>
            <CountryButton >
                <InputForCheckButton type="checkbox"
              name= "showCountry"
              onChange={formik.handleChange}
              value={formik.values.showCountry}/>
                <Slidder onClick ={()=> {
                  showcountry.current = !showcountry.current
                  dispatch(showCountry(showcountry.current))}} />
            </CountryButton>
            <CountryLabel > Show Country</CountryLabel>
        </GroupElementSelector>
    </Form>
  )
    
}  

export default FormComponent ;
