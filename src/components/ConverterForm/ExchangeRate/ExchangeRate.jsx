import React from 'react';
import { convertAmount } from '../../../utils/pocketsUtils';

const ExchangeRate = ({ from, to, rates }) => (
  <span>
    <strong>Exchange Rate</strong> 1{from} = {convertAmount(1, from, to, rates)}
    {to}
  </span>
);

export default ExchangeRate;
