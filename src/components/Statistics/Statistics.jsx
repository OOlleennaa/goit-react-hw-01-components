import { StatisticsMain, StatTitle, StatItem, StatList, StatLabel, StatPercentage } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsMain>
  <StatTitle>Upload stats</StatTitle>

  <StatList>
    <StatItem>
      <StatLabel>.docx</StatLabel>
      <StatPercentage>4%</StatPercentage>
    </StatItem>
    <StatItem>
      <StatLabel>.mp3</StatLabel>
      <StatPercentage>14%</StatPercentage>
    </StatItem>
    <StatItem>
      <StatLabel>.pdf</StatLabel>
      <StatPercentage>41%</StatPercentage>
    </StatItem>
    <StatItem>
      <StatLabel>.mp4</StatLabel>
      <StatPercentage>12%</StatPercentage>
    </StatItem>
  </StatList>
</StatisticsMain>
    );
};
