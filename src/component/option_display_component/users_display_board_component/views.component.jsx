import React from 'react' ;
import {ViewParent} from "./views.component.styled" ;
import UserDetailsParent from "../user_details_component/user_details.component" ;

function ViewsComponent() {
    return (
        <ViewParent>
            <UserDetailsParent />
        </ViewParent>
    )
}

export default ViewsComponent
