import React from 'react' ;
import { useSelector } from "react-redux";

import {ViewParent} from "./views.component.styled" ;
import UserDetailsParent from "../user_details_component/user_details.component" ;
import ExpandedUserDetails from "../expanded_user_details_component/expanded_user_details.component.jsx" ;


function ViewsComponent() {
    const {viewType} = useSelector(state => state.viewType) ;
    const view = {
        Normal: <UserDetailsParent /> ,
        Expanded: <ExpandedUserDetails />
    }
    return (
        <ViewParent>
            {view[viewType]}
        </ViewParent>
    )
}

export default ViewsComponent ;
