import styled from "styled-components" ;

export const UserDetailsParent = styled.div`
    width: 450px;
    height: 105px;
    background: #FCFCFF ;
    box-shadow: 10px 10px 40px #0000000D;
    border-radius: 18px;
    opacity: 1 ;
    display: flex ;
    padding: 10px ;
`;

export const ImageHolder = styled.div`
    flex: 1;
    border-radius: 50% ;
    background: transparent 0% 0% no-repeat padding-box;
    /* background-image: */
    border: 4px solid #75D6D1;
    opacity: 1;
    margin: 10px 10px 10px 0 ;
    
`;

export const DetailsHolder = styled.div`
    flex: 4 ;
    display: flex ;
    flex-direction: column ;
    align-items: flex-start ;
    margin: 10px 10px 10px 0 ;
    color: #262A41;
    opacity: 1;
` ;

export const NameHolder = styled.h1`
    font-size: 0.8em ;
    margin-bottom: 10px ;
` ;

export const AddressHolder = styled.h2`
    font-size: 0.8em ;
    margin-bottom: 10px ;
    font-weight: 500;
    font-style: italic ;
    opacity: 0.69;
    
` ;

export const ContactDetails = styled.div`
    display: flex ;
    align-items: center ;
` ;

export const IconHolder =  styled.span`
    margin-right: 5px ;
`;

export const Details = styled.p`
    font-size: 0.7em ;
    margin-right: 10px ;
` ;

export const MoreDetails = styled.div`
    flex: 0.5 ;
    display: flex ;
    align-items: flex-end ;
    justify-content: flex-start;
    margin: 10px 0 10px 0 ;
` ;

export const MoreDeatilsButton = styled.button`
    width: 80% ;
    height: 40% ;
    background: #30BBB5 0% 0% no-repeat padding-box;
    box-shadow: 2px 15px 30px #30BBB574;
    border-radius: 9px;
    opacity: 1;
    border: 0 ;
    color: #ffff ;
    opacity: 1 ;
    display: flex ;
    justify-content: center ;
    align-items: center ;
` ;