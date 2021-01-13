import React from 'react' ;
import {ViewParent} from "./views.component.styled" ;
// import UserDetailsParent from "../user_details_component/user_details.component" ;
import ExpandedUserDetails from "../expanded_user_details_component/expanded_user_details.component.jsx" ;


function ViewsComponent() {
    return (
        <ViewParent>
            {/* <UserDetailsParent /> */}
            <ExpandedUserDetails />
        </ViewParent>
    )
}

export default ViewsComponent ;
