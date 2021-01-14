import React from 'react' ;
import { connect } from "react-redux";

import {FilterParent, GreetingsHolder, UserTypeLabel, FilterLabel} from "./filter.component.styled" ;
import FormComponent  from "./filterForm_component/filter_form.components" ;

function FilterComponent({userType}) {
    let filter ;
    (userType) ? filter = userType : filter = "All Users" ;
    return (
        <FilterParent>
            <UserTypeLabel>{filter}</UserTypeLabel>
            <FilterLabel>Filter by</FilterLabel>
            <GreetingsHolder>
                <FormComponent />
            </GreetingsHolder>
        </FilterParent>
    )
}

const mapStateToProps = state => {
    const {userType } = state.userType
    return {
        userType 
    }
}

export default connect(mapStateToProps) (FilterComponent)
