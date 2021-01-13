import React from 'react' ;


import { useFormik } from "formik";

import {Form, Select, GroupElement, Input, SearchButtton,
    GroupElementSelector, CountryButton, InputForCheckButton, Slidder, CountryLabel 
} from "./filter_form.component.styled" ;
import {countries} from "./country_list" ;

function FormComponent() {
const initialValues = {
    country: "",
    showCountry: false ,
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
        >
              {countries.map((value, index2) => (
                <option key={index2} value={value}>
                  {value}
                </option>
              ))}
        </Select>
        <GroupElementSelector>
            <CountryButton>
                <InputForCheckButton type="checkbox"
              name= "showCountry"
              onChange={formik.handleChange}
              value={formik.values.showCountry}/>
                <Slidder />
            </CountryButton>
            <CountryLabel > Show Country</CountryLabel>
        </GroupElementSelector>
    </Form>
  )
    
}  

export default FormComponent ;
