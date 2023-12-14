import styled from "styled-components";

export const ProfileWrapp = styled.div`
width: 400px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  box-shadow: 0 0 10px #c6cccced;
  border-radius: 10px;
  margin: 0 auto;
`;

export const ProfileDescription = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  border-bottom: #7e6f7498 solid 2px;
`;

export const ProfileName = styled.p`
font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #75d146e0;
`;

export const ProfileAvatar = styled.img`
width: 300px;
  box-shadow: 0 0 3px 0px #0000004d;
  border-radius: 50%;
  background-color: #e7eeeeed;
  padding: 20px 10px 0px 10px;
  margin-bottom: 15px;
`;

export const ProfileTag = styled.p`
font-weight: 500;
  font-size: 20px;
  color: #e91464;
  margin-bottom: 15px;
`;

export const ProfileLocation = styled.p`
font-weight: 700;
  font-size: 20px;
  color: #2be9e1e0;
  margin-bottom: 15px;
`;

export const ProfileParam = styled.ul`
display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 0;
  width: inherit;
  background-color: #e9f53085;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ProfileParamItems = styled.li`
display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  min-width: 80px;
  padding: 7px 0;
`;

export const ProfileLabel = styled.span`
margin-right: 3px;
  font-weight: 700;
  font-size: 20px;
  color: #e91464;
  margin-bottom: 5px;
`;

export const ProfileQuantity = styled.span`
font-weight: 800;
  font-size: 20px;
  color: #2be9e1e0;
`;








