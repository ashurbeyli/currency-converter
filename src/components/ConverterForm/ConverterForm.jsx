import React, { useEffect, useState, useReducer } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import _ from 'lodash';
import './ConverterForm.css';
import CurrencyControls from './CurrencyControls/CurrencyControls';
import PocketInfo from './PocketInfo/PocketInfo';
import ExchangeRate from './ExchangeRate/ExchangeRate';
import {
  convertAmount,
  getFirstFromOmittedPockets,
  omitSelectedFromPockets
} from '../../utils/pocketsUtils';

import pockets from '../../mock/data/pockets';
import mockBalance from '../../mock/data/balance';
import twoDecimalsFormatter from '../../utils/formatters/twoDecimalsFormatter';
import { balanceReducer } from './reducers';

const ConverterForm = ({ rates }) => {
  const [balance, balanceDispatcher] = useReducer(balanceReducer, mockBalance);
  const [currencyFrom, setCurrencyFrom] = useState(pockets[0]);
  const [currencyTo, setCurrencyTo] = useState(pockets[1]);
  const [fromNumber, setFromNumber] = useState('');
  const [toNumber, setToNumber] = useState('');
  const [lastUpdatedInput, setLastUpdatedInput] = useState();
  const balanceFrom = Number(_.get(balance, currencyFrom) || 0);
  const balanceTo = Number(_.get(balance, currencyTo) || 0);

  useEffect(() => {
    if (lastUpdatedInput === 'to') {
      setFromNumber(convertAmount(toNumber, currencyTo, currencyFrom, rates));
    } else {
      setToNumber(convertAmount(fromNumber, currencyFrom, currencyTo, rates));
    }
  }, [
    lastUpdatedInput,
    toNumber,
    setToNumber,
    fromNumber,
    currencyFrom,
    currencyTo,
    rates
  ]);

  const onChangeCurrencyFromSelect = evt => {
    const { value } = evt.target;
    setCurrencyFrom(value);
    setCurrencyTo(getFirstFromOmittedPockets(pockets, value));
  };

  const onCurrencyFromInputChange = value => {
    const converted = convertAmount(value, currencyFrom, currencyTo, rates);
    setFromNumber(value);
    setToNumber(converted || '');
    setLastUpdatedInput('from');
  };

  const onCurrencyToInputChange = value => {
    const converted = convertAmount(value, currencyTo, currencyFrom, rates);
    setToNumber(value);
    setFromNumber(converted || '');
    setLastUpdatedInput('to');
  };

  const checkBalanceIsValid = () =>
    Number(balanceFrom || 0) - Number(fromNumber || 0) >= 0;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    balanceDispatcher({
      type: 'DECREASE',
      by: Number(fromNumber || 0),
      currency: currencyFrom
    });
    balanceDispatcher({
      type: 'INCREASE',
      by: Number(toNumber || 0),
      currency: currencyTo
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Row>
        <Col xs={5}>
          <CurrencyControls
            label="from"
            options={pockets}
            onChangeSelect={onChangeCurrencyFromSelect}
            onChangeInput={onCurrencyFromInputChange}
            inputFormatter={twoDecimalsFormatter}
            inputValue={fromNumber || ''}
          />
        </Col>
        <Col xs={2} className="text-center">
          {'=>'}
        </Col>
        <Col xs={5}>
          <CurrencyControls
            label="to"
            selected={currencyTo}
            options={omitSelectedFromPockets(pockets, currencyFrom)}
            onChangeSelect={evt => setCurrencyTo(evt.target.value)}
            onChangeInput={onCurrencyToInputChange}
            inputFormatter={twoDecimalsFormatter}
            inputValue={toNumber || ''}
          />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col xs={3}>
          <PocketInfo
            currency={currencyFrom}
            balance={balanceFrom}
            value={fromNumber}
          />
        </Col>
        <Col xs={6} className="text-center">
          <ExchangeRate from={currencyFrom} to={currencyTo} rates={rates} />
        </Col>
        <Col xs={3} className="text-right">
          <PocketInfo currency={currencyTo} balance={balanceTo} />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col className="text-right exchangeSubmitArea">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            block
            disabled={!checkBalanceIsValid()}
          >
            Exchange
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default ConverterForm;
