import React from 'react';
import { mount } from 'enzyme';
import PocketInfo from '../PocketInfo';

describe('<PocketInfo />', () => {
  test('snapshot should match', () => {
    const wrapper = mount(<PocketInfo value={1} currency="USD" />);
    expect(wrapper).toMatchSnapshot();
  });
});
