import styled from "styled-components";

export const FriendsParam = styled.li`
display: flex;
  align-items: center;
  box-shadow: 0 0 10px #c6cccced;
  padding: 20px;
`;

export const FriendsStatus = styled.span`
width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
      display: block;
    background-color: 
    ${props => props.status === true ? `green` :
               props.status === false ? `red` : ``} ;
    
`;

export const FriendsPhoto = styled.img`
width: 100px;
  margin-right: 10px;
`;

export const FriendsName = styled.p`
font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #524a4d;
`;