import React from 'react';
import PropTypes from 'prop-types';
import { convertAmount } from '../../../utils/pocketsUtils';

const propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  rates: PropTypes.arrayOf(PropTypes.object).isRequired
};

const ExchangeRate = ({ from, to, rates }) => (
  <span>
    <strong>Exchange Rate</strong> 1{from} = {convertAmount(1, from, to, rates)}
    {to}
  </span>
);


ExchangeRate.propTypes = propTypes;
ExchangeRate.DisplayName = 'ExchangeRate';

export default ExchangeRate;
