import styled from "styled-components" ;

export const SearchParent = styled.div`
flex: 1 ;
opacity: 1;
padding: 10px ;
`;

export const Form = styled.form`
    display: flex ;
    align-items: center ;
    width: 90% ;
    height: 90% ;
`;

export const GroupElement = styled.div`
    width: 100% ;
    height: 60% ;
    display: flex ;
    flex-direction: row-reverse ;
    border: 1px solid #3C3F54;
    border-radius: 28px;
    background: #3C3F54 0% 0% no-repeat padding-box;
    color: #fff;
`;

export const Input = styled.input`
background: #3C3F54 0% 0% no-repeat padding-box;
    width: 80% ;
    height: 90% ;
    border: 1px solid #3C3F54;
    opacity: 1;
    border-top-right-radius: 28px;
    border-bottom-right-radius: 28px;
    outline: none ;
    color: #fff;
`;

export const SearchButtton = styled.button`
color: #fff;
outline: none ;
background: #3C3F54 0% 0% no-repeat padding-box;
    width: 20% ;
    height: 90% ;
    border: 1px solid #3C3F54;
    opacity: 1;
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
`;
