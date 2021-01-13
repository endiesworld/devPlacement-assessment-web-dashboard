import styled from "styled-components"; 

export const ParentDiv = styled.div`
    width: 450px;
    height: 300px;
    background: #FCFCFF ;
    box-shadow: 10px 10px 40px #0000000D;
    border-radius: 18px;
    display: flex ;
    flex-direction: column ;
    padding: 20px ;
`;

export const BackNavigatorHolder = styled.div`
    height: 20px;
    display: flex ;
    align-items: center ;
    margin-left: 20px ;
`;

export const BackArrow = styled.span`
    color: #30BBB574 ;

`;

export const Result = styled.h2`
    color: #262A41;
    font-size: 0.8em ;
    font-weight: 600;
    font-style: bold ;
    opacity: 1;
`;

// export const FilterLabel = styled.p`
//     flex: 1;
//     margin-top: 5px ;
//     font-size: 0.7em ;
// `;

export const UderDetails = styled.div`
    width: 100%;
    height: 280px;
    background: #FCFCFF ;
    box-shadow: 10px 10px 40px #0000000D;
    border-radius: 18px;
    opacity: 1 ;
    display: flex ;
    padding: 10px ;
`;

export const ImageHolder = styled.div`
    flex: 1;
    height: 50% ;
    border-radius: 50% ;
    background: transparent 0% 0% no-repeat padding-box;
    /* background-image: */
    border: 4px solid #75D6D1;
    opacity: 1;
    margin: 10px 10px 10px 0 ;
    
`;

export const DetailsHolder = styled.div`
    flex: 2 ;
    height: 70% ;
    display: flex ;
    flex-direction: column ;
    align-items: flex-start ;
    margin: 10px 10px 10px 0 ;
    color: #262A41;
    padding: 10px ;
` ;

export const NameAndAgeHolder = styled.div`
    flex: 0.5 ;
    display: flex ;
    margin-bottom: 5px ;
`;

export const NameHolder = styled.h1`
    font-size: 1em ;
    opacity: 1;
    color: #262A41;
` ;

export const AgeHolder = styled.p`
    margin-left: 10px ;
    font-size: 1em ;    
` ;

export const AddressHolder = styled.div`
    flex: 0.5 ; 
`;

export const AddressDetails = styled.p`
    font-size: 0.8em ;
` ;

export const EmailDetailsHolder = styled.div`
    flex: 0.5 ;
    display: flex ;
    align-items: center ;
    margin-bottom: 5px ;
    border-radius: 35px;
    background: #0000001A ;
    width: 70% ;
    padding-left: 10px ;
` ;

export const DateJoinedHolder = styled.div`
    flex: 0.4;
    display: flex ;
    width: 40% ;
    align-items: center ;
    margin-bottom: 5px ;
    border-radius: 35px;
    background: #F935A9 ;
    opacity: 0.5;
    padding-left: 10px ;
` ;
export const DateJoined = styled.h1`
    font-size: 0.6em ;
    opacity: 1;
    color: #262A41;
` ;

export const IconHolder =  styled.span`
    margin-right: 5px ;
`;

export const Details = styled.p`
    font-size: 0.7em ;
    margin-right: 10px ;
` ;

export const PhoneDetails = styled.div`
    flex: 0.5 ;
    display: flex ;
    padding-left: 10px ;
`;

export const MoreDetails = styled.div`
    flex: 0.5 ;
    display: flex ;
    align-items: flex-end ;
    justify-content: flex-start;
    margin: 10px 0 10px 0 ;
` ;