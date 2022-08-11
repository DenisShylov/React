import React from 'react';

const NumbersList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
