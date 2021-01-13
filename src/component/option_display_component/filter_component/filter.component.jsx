import React from 'react' ;
import {FilterParent, GreetingsHolder, UserTypeLabel, FilterLabel} from "./filter.component.styled" ;
import FormComponent  from "./filterForm_component/filter_form.components" ;

function FilterComponent({filterSex}) {
    let filter ;
    (filterSex) ? filter = filterSex : filter = "User Filter" ;
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

export default FilterComponent
