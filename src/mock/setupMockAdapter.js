import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_URL } from '../utils/constants/apiConstants';
import mockRates from './data/rates';

export default () => {
  const mock = new MockAdapter(axios);
  mock.onGet(API_URL).reply(200, mockRates);

  return mock;
};
