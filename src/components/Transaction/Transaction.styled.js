import styled from "styled-components";

export const TransactionTable = styled.table`
 margin: 30px auto;
   display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px #8d5fcb;
  width: 370px;
  border-spacing: 0;
  color: #8d5fcb;
`

export const TransactionMain = styled.tr`
margin-bottom: 5px;
  padding: 10px;
`;

export const TransMainItems = styled.th`
font-weight: 800;
  font-size: 20px;
  margin-bottom: 5px;
  color: #f9961afa;
`;

export const TransBodyTitle = styled.tr`
display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #e524b3;
 
`;

export const TransBodyItems = styled.td`
padding: 10px;
  width: inherit;
  font-weight: 700;
  font-size: 15px;
  color: #524a4d;
  /* display: flex; */
  justify-content: center;
`