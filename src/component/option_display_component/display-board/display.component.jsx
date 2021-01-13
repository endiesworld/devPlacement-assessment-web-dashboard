import React from 'react' ;
import {DisplayParent} from "./display.styled" ;
import FilterComponent from "../filter_component/filter.component" ;
import ViewsComponent from '../users_display_board_component/views.component';


function UsersDisplayBoard() {
    return (
        <DisplayParent>
            <FilterComponent/>
            <ViewsComponent />
        </DisplayParent>
    )
}

export default UsersDisplayBoard ;
