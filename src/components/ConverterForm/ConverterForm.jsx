import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './ConverterForm.css';
import CurrencyControls from './CurrencyControls/CurrencyControls';
import PocketInfo from './PocketInfo/PocketInfo';
import ExchangeRate from './ExchangeRate/ExchangeRate';

class ConverterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pockets: {
        EUR: {
          balance: 120
        },
        GBP: {
          balance: 50
        },
        USD: {
          balance: 200
        }
      },
      rates: {
        USD: 1.103,
        EUR: 1.0,
        GBP: 0.90155
      },
      from: 'EUR',
      to: 'GBP',
      fromNumber: 0,
      toNumber: 0
    };
  }

  updateFrom = evt => {
    this.setState({
      from: evt.target.value
    });
  };

  updateTo = evt => {
    this.setState({
      to: evt.target.value
    });
  };

  updateFromNumber = evt => {
    this.setState({
      fromNumber: evt.target.value,
      toNumber: 15
    });
  };

  updateToNumber = evt => {
    this.setState({
      fromNumber: 10,
      toNumber: evt.target.value
    });
  };

  render() {
    const { pockets, from, to, fromNumber, toNumber } = this.state;
    return (
      <Form>
        <Form.Row>
          <Col xs={5}>
            <CurrencyControls
              label="from"
              options={Object.keys(pockets)}
              onChangeSelect={this.updateFrom}
              onChangeInput={this.updateFromNumber}
              inputValue={fromNumber}
            />
          </Col>
          <Col xs={2} className="text-center">
            {'=>'}
          </Col>
          <Col xs={5}>
            <CurrencyControls
              label="to"
              options={Object.keys(pockets).filter(el => el !== from)}
              onChangeSelect={this.updateTo}
              onChangeInput={this.updateToNumber}
              inputValue={toNumber}
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col xs={3}>
            <PocketInfo currency={from} value={pockets[from].balance} />
          </Col>
          <Col xs={6} className="text-center">
            <ExchangeRate from={from} to={to} />
          </Col>
          <Col xs={3} className="text-right">
            <PocketInfo currency={to} value={pockets[to].balance} />
          </Col>
        </Form.Row>
        <Form.Row>
          <Col className="text-right exchangeSubmitArea">
            <Button variant="primary" size="lg" block>
              Exchange
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

export default ConverterForm;
