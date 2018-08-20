import React from 'react';
import toJson from 'enzyme-to-json';

import Counter from '../../components/counter';

describe('Counter > Shallow render the component', () => {
  let wrapper;
  const value = 10;

  beforeEach(() => {
    wrapper = shallow(<Counter value={value} />);
  });

  it('renders the dumb component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('contains correct value', () => {
    // expect(wrapper.)
  });
});
