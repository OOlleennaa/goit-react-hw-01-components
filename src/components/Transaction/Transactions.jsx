import { TransactionMain, TransMainItems,TransactionTable,TransBodyTitle, TransBodyItems } from "./Transaction.styled";

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
  <thead>
    <TransactionMain>
      <TransMainItems>Type</TransMainItems>
      <TransMainItems>Amount</TransMainItems>
      <TransMainItems>Currency</TransMainItems>
    </TransactionMain>
  </thead>

  <tbody>
    <TransBodyTitle>
      <TransBodyItems>Invoice</TransBodyItems>
      <TransBodyItems>125</TransBodyItems>
      <TransBodyItems>USD</TransBodyItems>
    </TransBodyTitle>
    <TransBodyTitle>
      <TransBodyItems>Withdrawal</TransBodyItems>
      <TransBodyItems>85</TransBodyItems>
      <TransBodyItems>USD</TransBodyItems>
    </TransBodyTitle>
  </tbody>
</TransactionTable>
    );
};