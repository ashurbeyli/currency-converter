import React from 'react';
import { Col, Form, FormControl, InputGroup } from 'react-bootstrap';

const CurrencyControls = ({
  label,
  options,
  inputValue,
  onChangeSelect,
  onChangeInput
}) => {
  return (
    <Form.Row>
      <Col xs={3}>
        <Form.Group>
          <Form.Control as="select" onChange={onChangeSelect}>
            {options &&
              options.map(currency => {
                return (
                  <option value={currency} key={currency}>
                    {currency}
                  </option>
                );
              })}
          </Form.Control>
        </Form.Group>
      </Col>
      <Col xs={9}>
        <InputGroup>
          <FormControl
            placeholder={label}
            aria-label={label}
            onChange={onChangeInput}
            value={inputValue}
          />
        </InputGroup>
      </Col>
    </Form.Row>
  );
};

export default CurrencyControls;
