import React from 'react';
import renderer from 'react-test-renderer';

import Counter from '../../../components/counter';

describe('Counter Component', () => {
  it('capturing snapshot of Counter', () => {
    const onAdd = jest.fn();
    const onRemove = jest.fn();
    const onReset = jest.fn();
    const value = 12;

    const renderedValue = renderer.create(
      <Counter
        value={value}
        onAdd={onAdd}
        onRemove={onRemove}
        onReset={onReset}
      />,
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
