import React from 'react';
import { Col, Form, FormControl, InputGroup } from 'react-bootstrap';
import PropTypes from "prop-types";
import './CurrencyControls.css';


const propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  onChangeSelect: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired
};

const defaultProps = {
  inputValue: ''
};

const CurrencyControls = ({
  label,
  options,
  selected,
  inputValue,
  onChangeSelect,
  onChangeInput
}) => {
  return (
    <Form.Row>
      <Col xs={3} className={label === 'to' ? 'mirror-col' : ''}>
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
            onChange={onChangeInput}
            value={inputValue}
          />
        </InputGroup>
      </Col>
    </Form.Row>
  );
};

CurrencyControls.propTypes = propTypes;
CurrencyControls.defaultProps = defaultProps;
CurrencyControls.DisplayName = 'CurrencyControls';

export default CurrencyControls;
