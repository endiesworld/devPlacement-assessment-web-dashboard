import styled from "styled-components" ;

export const Form = styled.form`
    display: flex ;
    align-items: center ;
    justify-content: flex-start ;
    width: 500px;
    height: 100% ;
    min-height: 45px
`;

export const GroupElement = styled.div`
    flex: 2 ;
    height: 60% ;
    display: flex ;
    flex-direction: row-reverse ;
    border: 0;
    border-radius: 35px;
    margin-right: 20px ;
    
    
`;

export const Input = styled.input`
    background: #0000001A ;
    border: 0;
    width: 80% ;
    height: 92% ;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;
    outline: none ;
    color: #3C3F54;
    opacity: 0.52 ;
`;

export const SearchButtton = styled.button`
    color: #262a41;
    outline: none ;
    background: #0000001A  ;
    width: 20% ;
    height: 100% ;
    border: 0;
    border-top-left-radius: 35px;
    border-bottom-left-radius: 35px;
    opacity: 0.52 ;
`;

export const Select = styled.select`
    flex: 1 ;
    color: #262a41;
    outline: none ;
    background: #0000001A  ;
    height: 60%;
    border: 0;
    border-radius: 35px;
    opacity: 0.73 ;
    margin-right: 30px ;
`;

export const GroupElementSelector = styled.div`
    flex: 1 ;
    height: 50% ;
    display: flex ;
    align-items: center ;
`;

export const CountryButton = styled.label`
    position: relative;
    display: inline-block;
    width: 25px;
    height: 12.5px;
`;

export const Slidder = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 35%;
    :before {
        position: absolute;
        content: "";
        height: 10px;
        width: 10px;
        left: 10%;
        bottom: 15%;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 35%;
}
`;

export const InputForCheckButton = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    :checked + ${Slidder} {
  background-color: #30BBB5;
}
    :focus + ${Slidder} {
        box-shadow: 0 0 1px #30BBB5;
}
:checked + ${Slidder}:before {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
}
`;

export const CountryLabel = styled.h2`
    margin-left: 5px ;
    font-size: 0.6em ;
    color: #000000;
    opacity: 0.62;
`;
