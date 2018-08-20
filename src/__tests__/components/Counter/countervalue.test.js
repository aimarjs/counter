import React from 'react';
import renderer from 'react-test-renderer';

import CounterValue from '../../../components/counter/CounterValue';

describe('CounterValue Component', () => {
  it('capturing snapshot of CounterValue', () => {
    const value = 0;

    const renderedValue = renderer.create(
      <CounterValue
        value={value}
      />,
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
