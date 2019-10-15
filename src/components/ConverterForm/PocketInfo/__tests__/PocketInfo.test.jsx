import React from 'react';
import { mount } from 'enzyme';
import PocketInfo from '../PocketInfo';

describe('<PocketInfo />', () => {
  test('snapshot should match', () => {
    const wrapper = mount(<PocketInfo balance={100} currency="USD" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('snapshot should match when balance is less than value', () => {
    const wrapper = mount(<PocketInfo value={150} balance={100} currency="USD" />);
    expect(wrapper).toMatchSnapshot();
  });
});
