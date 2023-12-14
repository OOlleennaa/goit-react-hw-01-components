import styled from "styled-components";

export const StatisticsMain = styled.section`
display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  box-shadow: 0 0 10px #c6cccced;
  margin-top: 30px;
`;

export const StatTitle = styled.h2`
font-weight: 700;
  font-size: 30px;
  margin-bottom: 15px;
  color: #8d5fcb;
`;

export const StatList = styled.ul`
width: 370px;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
`;

export const StatItem = styled.li`
display: flex;
  flex-direction: column;
  padding: 10px;
  width: inherit;
  align-items: center;
`;

export const StatLabel = styled.span`
font-weight: 700;
  font-size: 20px;
  color: #f9961afa;
  margin-bottom: 5px;
`;

export const StatPercentage = styled.span`
font-weight: 800;
  font-size: 20px;
  color: #e524b3;
`;