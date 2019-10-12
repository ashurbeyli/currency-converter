import React from 'react';
import { shallow } from 'enzyme';
import ExchangeRate from '../ExchangeRate';

describe('<ExchangeRate />', () => {
  test('snapshot should match', () => {
    const wrapper = shallow(<ExchangeRate from="EUR" currency="USD" />);
    expect(wrapper).toMatchSnapshot();
  });
});
