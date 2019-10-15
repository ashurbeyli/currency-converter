import React from 'react';
import { shallow } from 'enzyme';
import ConverterForm from '../ConverterForm';

describe('<ConverterForm/>', () => {
  test('snapshot should match', () => {
    const wrapper = shallow(<ConverterForm rates={['USD', 'AZN', 'EUR']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
