import React from 'react' ;
import {WelcomeParent, Greetings, GreetingsHolder, AdminName, WelcomeMessage} from "./welcome.component.styled"

function WelcomeComponent({name}) {
    
    let adminName ;
    (name) ? adminName = name : adminName = " Emerald" ;
    return (
        <WelcomeParent>
            <GreetingsHolder>
                <Greetings> Hello,+ " "   </Greetings>
                <AdminName>{" " + adminName}</AdminName>
            </GreetingsHolder>
            <WelcomeMessage>
                welcome to your dashboard, kindly sort through the user base.
            </WelcomeMessage>
            
        </WelcomeParent>
    )
}

export default WelcomeComponent ;
