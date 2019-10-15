import React from 'react';
import { Col, Form, FormControl, InputGroup } from 'react-bootstrap';

const CurrencyControls = ({
  label,
  options,
  selected,
  inputValue,
  onChangeSelect,
  onChangeInput,
  inputFormatter
}) => {
  return (
    <Form.Row>
      <Col xs={3}>
        <Form.Group>
          <Form.Control as="select" onChange={onChangeSelect} value={selected}>
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
            onChange={inputFormatter(onChangeInput)}
            value={inputValue}
          />
        </InputGroup>
      </Col>
    </Form.Row>
  );
};

export default CurrencyControls;
