import React from 'react' ;
import { useSelector } from "react-redux";

import {FilterParent, GreetingsHolder, UserTypeLabel, FilterLabel} from "./filter.component.styled" ;
import FormComponent  from "./filterForm_component/filter_form.components" ;

function FilterComponent() {
    const {userType} = useSelector(state => state.userType)
    return (
        <FilterParent>
            <UserTypeLabel>{userType}</UserTypeLabel>
            <FilterLabel>Filter by</FilterLabel>
            <GreetingsHolder>
                <FormComponent />
            </GreetingsHolder>
        </FilterParent>
    )
}

// const mapStateToProps = state => {
//     /**
//      * usertype as a variable is used to get the exact data needed from the object returned by state.userType
//      * while the userType in state.userType is used to select the userTypeReducer from the root Reducer
//      **/ 
//     const {userType } = state.userType
//     return {
//         userType 
//     }
// }

export default FilterComponent ;
