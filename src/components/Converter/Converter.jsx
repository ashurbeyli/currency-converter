import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl
} from 'react-bootstrap';
import './Converter.css';

const Converter = () => {
  return (
    <Container>
      <Row>
        <Col className="title">
          <h2>Currency Converter</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <Row>
            <Col xs={3}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={9}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="From"
                  aria-label="Convert from"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>
        </Col>
        <Col xs={2} className="text-center">
          =>
        </Col>
        <Col xs={5}>
          <Row>
            <Col xs={3}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Control as="select">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={9}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="To"
                  aria-label="Convert from"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Converter;
