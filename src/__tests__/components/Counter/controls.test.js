import React from 'react';
import renderer from 'react-test-renderer';

import Controls from '../../../components/Counter/Controls';

describe('Controls Component', () => {
  it('capturing snapshot of Controls', () => {
    const onAdd = () => {};
    const onRemove = () => {};
    const onReset = () => {};
    const value = 0;

    const renderedValue = renderer.create(
      <Controls
        value={value}
        onAdd={onAdd}
        onRemove={onRemove}
        onReset={onReset}
      />,
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
