import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  balance: PropTypes.number.isRequired,
  value: PropTypes.string,
  currency: PropTypes.string.isRequired
};

const defaultProps = {
  value: ''
};

const PocketInfo = ({ balance, value, currency }) => (
  <span className={value && balance < Number(value || 0) ? 'text-danger' : {}}>
    You have {balance}
    {currency}
  </span>
);

PocketInfo.propTypes = propTypes;
PocketInfo.defaultProps = defaultProps;
PocketInfo.DisplayName = 'ExchangeRate';

export default PocketInfo;
