import React from 'react';

const Spinner = ({ size }) => {
  const sizeSpinner = { height: size, width: size };

  return <span className="spinner" style={sizeSpinner}></span>;
};
export default Spinner;
