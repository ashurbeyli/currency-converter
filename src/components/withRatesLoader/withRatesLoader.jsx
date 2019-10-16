import React, { useState, useEffect } from 'react';
import useInterval from '@use-it/interval';
import { Alert } from 'react-bootstrap';
import fetchRates from '../../utils/api/fetchRates';
import { FETCH_RATES_DELAY } from '../../utils/constants/apiConstants';

const withRatesLoader = WrappedComponent => () => {
  const [rates, setRates] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const intervalFunc = () => {
    fetchRates()
      .then(res => {
        setIsLoading(false);
        setRates(res.data);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    intervalFunc();
  }, []);

  useInterval(intervalFunc, FETCH_RATES_DELAY);

  if (isLoading) return <div>loading...</div>;
  return rates && !error ? (
    <WrappedComponent rates={rates} />
  ) : (
    <Alert variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      {error && error.message}
    </Alert>
  );
};

export default withRatesLoader;
