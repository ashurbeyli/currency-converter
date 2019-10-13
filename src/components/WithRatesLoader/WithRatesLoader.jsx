import React, { useEffect, useState } from 'react';
import getRates from '../../utils/api/getRates';

const WithRatesLoader = WrapperComponent => {
  const [error, setError] = useState();
  const [rates, setRates] = useState();

  let gettingRates;
  const intervalFunc = () => {
    if (gettingRates) {
      gettingRates.abort();
    }
    gettingRates = getRates()
      .then(response => {
        gettingRates = undefined;
        return response.data
          ? setRates(response.data)
          : setError('Error loading rates');
      })
      .catch(err => {
        gettingRates = undefined;
        setError(err);
      });
    return true;
  };

  useEffect(() => {
    // intervalFunc();
    setInterval(intervalFunc, 10 * 1000);
  });

  return rates && !error ? <WrapperComponent rates={rates} /> : error;
};

export default WithRatesLoader;
