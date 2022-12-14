import React from 'react';
import moment from 'moment';

const formatter = new Intl.NumberFormat('en-GB');

const Transaction = ({ from, to, amount, time, rate }) => {
  return (
    <li className="transaction">
      <span className="transaction__date">{moment(time).format('D MMM')}</span>
      <span className="transaction__time">19:08</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{formatter.format(amount)}</span>
    </li>
  );
};

export default Transaction;
