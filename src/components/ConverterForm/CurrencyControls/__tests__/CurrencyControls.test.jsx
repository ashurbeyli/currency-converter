import React from 'react';
import { shallow } from 'enzyme';
import { FormControl, InputGroup } from 'react-bootstrap';
import CurrencyControls from '../CurrencyControls';

describe('<ExchangeRate />', () => {
  const onChangeSelect = jest.fn();
  const onChangeInput = jest.fn();

  afterEach(() => {
    onChangeInput.mockReset();
    onChangeSelect.mockReset();
  });

  test('snapshot should match', () => {
    const wrapper = shallow(
      <CurrencyControls
        label="From"
        options={['AZN', 'USD', 'EUR']}
        inputValue={15}
        onChangeSelect={onChangeSelect}
        onChangeInput={onChangeInput}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should onChangeSelect be called', async () => {
    const wrapper = shallow(
      <CurrencyControls label="From" onChangeSelect={onChangeSelect} />
    );

    await wrapper
      .find(FormControl)
      .first()
      .props()
      .onChange(1);

    expect(onChangeSelect).toHaveBeenCalledWith(1);
  });

  test('should onChangeInput be called', async () => {
    const wrapper = shallow(
      <CurrencyControls label="From" onChangeInput={onChangeInput} />
    );

    await wrapper
      .find(InputGroup)
      .find(FormControl)
      .props()
      .onChange(1);

    expect(wrapper).toMatchSnapshot();
    expect(onChangeInput).toHaveBeenCalledWith(1);
  });
});
