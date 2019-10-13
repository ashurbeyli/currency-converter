import React from 'react';

const PocketInfo = ({ value, currency }) => (
  <span>
    You have {value}
    {currency}
  </span>
);

export default PocketInfo;
