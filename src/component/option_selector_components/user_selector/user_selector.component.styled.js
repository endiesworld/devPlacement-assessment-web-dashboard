import styled from "styled-components" ;


export const UserSelectorParent = styled.div`
    flex: 2 ;
    opacity: 1;
    padding: 10px ;
    display: flex ;
    flex-direction:column ;
    align-items: flex-start ;    
`;

export const SelectorMessage = styled.p`
    flex: 1 ;
    font-weight: 100 ;
    opacity: 0.5 ;
    font-size: 0.8em ;
    margin-bottom: 20px ;
    color: #ffff ;
`;

export const UserSelectorHolder = styled.div`
    flex: 5 ;
    width: 370px;
    border-radius: 28px;
    opacity: 1;
    display: flex ;
`;

export const UserTypeHolder = styled.div`
    flex: 1 ;
    opacity: 1;
    display: flex ;
    flex-direction: column;
    align-items: flex-start ;
    justify-content: space-between ;
`;

export const AllUsers = styled.button`
    cursor: pointer ;
    color: #ffffff ;
    flex: 5 ;
    max-height: 75px;
    width: 80px ;
    background-color: #F935A9 ;
    border: 0 ;
    border-radius: 28px;
    opacity: 1;
    padding-left: 10px ;
    display: flex ;
    align-items: center ;
    outline: none ;
    justify-content: center ;
    :hover{
        width: 80% ;
    }
   
`;

export const MaleUsersSelector = styled(AllUsers)`
    background-color: #30BBB5 ;
` ;

export const FemaleUsersSelector = styled(AllUsers)`
    background-color: #7946C1 ;
` ;

export const UserSelectorMessage = styled.p`
    flex: 1 ;
    font-weight: 100 ;
    opacity: 0.5 ;
    font-size: 0.6em ;
    margin-top: 10px ;
    margin-left: 15px ;
    color: #ffff ;
`;

//export const Users = styled(usersicon)``;
// export const MaleUsers = styled(maleUsers)``;
// export const FemaleUsers = styled(femaleUsers)``;
