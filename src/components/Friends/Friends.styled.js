import styled from "styled-components";

export const FriendsStyled = styled.ul`
margin: 10px auto;
background-color: #d8fbf6;
 display: flex;
  flex-direction: column;
  width: inherit;
  padding: 0;
  width: 560px
  `;

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