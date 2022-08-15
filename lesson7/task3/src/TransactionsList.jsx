import React from 'react';
import Transaction from './Transaction.jsx';

const TransactionsList = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.map((transactions) => (
        <Transaction key={transactions.id} {...transactions} />
      ))}
    </ul>
  );
};

export default TransactionsList;
