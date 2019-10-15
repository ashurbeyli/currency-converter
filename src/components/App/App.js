import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ConverterForm from '../ConverterForm/ConverterForm';
import withRatesLoader from '../withRatesLoader/withRatesLoader';
import './App.css';

function App() {
  return (
    <Container className="App">
      <Row>
        <Col className="title">
          <h2>Exchange money</h2>
        </Col>
      </Row>
      {withRatesLoader(ConverterForm)()}
    </Container>
  );
}

export default App;
