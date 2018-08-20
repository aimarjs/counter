import React from 'react';
import renderer from 'react-test-renderer';

import Counter from '../../../components/counter';

describe('Counter Component', () => {
  it('capturing snapshot of Counter', () => {
    const onAdd = () => {};
    const onRemove = () => {};
    const onReset = () => {};
    const value = 0;

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
  // let wrapper; let onAdd; let onRemove; let onReset;
  // beforeEach(() => {
  //   const value = 10;
  //   onAdd = jest.fn();
  //   onRemove = jest.fn();
  //   onReset = jest.fn();
  //
  //   wrapper = shallow(
  //     <Counter
  //       value={value}
  //       onAdd={onAdd}
  //       onRemove={onRemove}
  //       onReset={onReset}
  //     />,
  //   );
  //   // console.log(wrapper.find());
  //   it('should render current counter value', () => {
  //
  //     expect(wrapper.find('Add').text()).toContain('10');
  //   });
  // });
});
