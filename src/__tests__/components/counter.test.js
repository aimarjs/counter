import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Counter from '../../components/counter'

describe('<Counter />', () => {
  describe('render()', () => {

    it('renders the component', () => {

      const wrapper = shallow(<Counter />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();

    })

  })
})
