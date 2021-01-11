import styled from "styled-components" ;

export const WelcomeParent = styled.div`
    flex: 1 ;
    background: transparent ;
    display: flex;
    flex-direction: column ;
    padding-left: 10px ;
    justify-content: center ;
    align-items: flex-start ;
`;

export const GreetingsHolder = styled.div`
    display: flex ;
`;
export const Greetings = styled.p`
    font-weight: 100 ;
    font-size: 1.5em ;
    color: #f7f0fb ;
`;
export const AdminName = styled.h2`
    font-weight: 400 ;
`;

export const WelcomeMessage = styled.p`
    font-weight: 100 ;
    opacity: 0.5 ;
    font-size: 0.8em ;
`;