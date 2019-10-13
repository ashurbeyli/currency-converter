import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './ConverterForm.css';
import CurrencyControls from './CurrencyControls/CurrencyControls';
import PocketInfo from './PocketInfo/PocketInfo';
import ExchangeRate from './ExchangeRate/ExchangeRate';
import {
  convertAmount,
  getFirstFromOmittedPockets,
  omitSelectedFromPockets
} from '../../utils/pocketsUtils';

import mockPockets from '../../mockData/pockets';
import mockRates from '../../mockData/rates';
import mockBalance from '../../mockData/balance';

const ConverterForm = () => {
  const [pockets] = useState(mockPockets);
  const [rates] = useState(mockRates);
  const [balance, setBalance] = useState(mockBalance);
  const [currencyFrom, setCurrencyFrom] = useState(pockets[0]);
  const [currencyTo, setCurrencyTo] = useState(pockets[1]);
  const [fromNumber, setFromNumber] = useState();
  const [toNumber, setToNumber] = useState();

  const onChangeCurrencyFromSelect = evt => {
    const { value } = evt.target;
    setCurrencyFrom(value);
    setCurrencyTo(getFirstFromOmittedPockets(pockets, value));
  };

  const onCurrencyFromInputChange = evt => {
    const { value } = evt.target;
    const converted = convertAmount(value, currencyFrom, currencyTo, rates);
    setFromNumber(value);
    setToNumber(converted || '');
  };
  const onCurrencyToInputChange = evt => {
    const { value } = evt.target;
    const converted = convertAmount(value, currencyTo, currencyFrom, rates);
    setToNumber(value);
    setFromNumber(converted || '');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setBalance({
      ...balance,
      [currencyFrom]: balance[currencyFrom] - Number(fromNumber || 0),
      [currencyTo]: balance[currencyTo] + Number(toNumber || 0)
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
            inputValue={fromNumber}
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
            inputValue={toNumber}
          />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col xs={3}>
          <PocketInfo currency={currencyFrom} value={balance[currencyFrom]} />
        </Col>
        <Col xs={6} className="text-center">
          <ExchangeRate from={currencyFrom} to={currencyTo} rates={rates} />
        </Col>
        <Col xs={3} className="text-right">
          <PocketInfo currency={currencyTo} value={balance[currencyTo]} />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col className="text-right exchangeSubmitArea">
          <Button type="submit" variant="primary" size="lg" block>
            Exchange
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
};

export default ConverterForm;
