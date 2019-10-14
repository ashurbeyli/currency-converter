import React, { useState, useEffect } from 'react';
import useInterval from '@use-it/interval';
import fetchRates from '../../utils/api/fetchRates';
import { FETCH_RATES_DELAY } from '../../utils/constants/apiConstants';


const withRatesLoader = WrapperComponent => () => {
  const [rates, setRates] = useState();
  const [error, setError] = useState();

  const intervalFunc = () => {
    fetchRates()
      .then(res => {
        setRates(res.data);
      })
      .catch(err => {
        setError(err);
      });
  };

  useEffect(() => {
    intervalFunc();
  }, []);

  useInterval(intervalFunc, FETCH_RATES_DELAY);

  return rates && !error ? <WrapperComponent rates={rates} /> : error;
};

export default withRatesLoader;
