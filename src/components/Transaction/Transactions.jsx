import { TransactionMain, TransMainItems,TransactionTable, TransBodyItems } from "./Transaction.styled";

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
  {items.map(({ id, type, amount, currency }) => {
                    return (<TransactionMain key={id}>
                            <TransBodyItems>{type}</TransBodyItems>
                            <TransBodyItems>{amount}</TransBodyItems>
                            <TransBodyItems>{currency}</TransBodyItems>
                        </TransactionMain>)  
                    })
                }
    {/* <TransBodyTitle>
      <TransBodyItems>Invoice</TransBodyItems>
      <TransBodyItems>125</TransBodyItems>
      <TransBodyItems>USD</TransBodyItems>
    </TransBodyTitle>
    <TransBodyTitle>
      <TransBodyItems>Withdrawal</TransBodyItems>
      <TransBodyItems>85</TransBodyItems>
      <TransBodyItems>USD</TransBodyItems>
    </TransBodyTitle> */}
  </tbody>
</TransactionTable>
    );
};