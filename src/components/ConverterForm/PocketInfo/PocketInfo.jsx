import React from 'react';

const PocketInfo = ({ balance, value, currency }) => (
  <span style={{ ...(value && balance < value ? { color: 'red' } : {}) }}>
    You have {balance}
    {currency}
  </span>
);

export default PocketInfo;
