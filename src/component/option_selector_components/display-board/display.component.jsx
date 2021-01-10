import React from 'react' ;
import {OptionsParent} from "./display.styled" ;
import WelcomeComponent from "../welcome_component/welcome.component" ;
import SearchComponent from "../search_component/search.component" ;
import UserSelectorComponent from "../user_selector/user_selector.component" ;

function OptionsSelector() {
    return (
        <OptionsParent>
            <WelcomeComponent />
            <SearchComponent />
            <UserSelectorComponent />            
        </OptionsParent>
    )
}

export default OptionsSelector ;