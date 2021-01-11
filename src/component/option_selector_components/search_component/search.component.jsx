import React from 'react' ;
import { useFormik } from "formik";

import {SearchParent, Form, GroupElement, Input, SearchButtton} from './search.component.styled' ;

function SearchComponent() {
const initialValues = {
    findUser: "",
};

const onSubmit = async (values) => {
    let search = JSON.stringify(values, null, 2);
    search = JSON.parse(search) ;
    console.log("user search, ", search.findUser) ;
};
    const formik = useFormik({
    initialValues,
    onSubmit,
  });


    return (
        <SearchParent>
            <Form onSubmit={ formik.handleSubmit}>
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
            </Form>
        </SearchParent>
    )
}

export default SearchComponent ;
