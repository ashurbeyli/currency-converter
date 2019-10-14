import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_URL } from '../utils/constants/apiConstants';
import mockRates from './data/rates';

export default () => {
  const mock = new MockAdapter(axios);

  mockRates.forEach((rates) => {
    mock.onGet(API_URL).replyOnce(200, rates);
  });
  mock.onGet(API_URL).reply(200, mockRates[0]);

  return mock;
};
