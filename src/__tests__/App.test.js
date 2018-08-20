import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from '../components/App';
import store from '../store/storeConfigure';

describe('<App>', () => {

  it('renders the page', () => {
    const wrapper = shallow(
      <Provider store={store}><App /></Provider>
    )
    expect(wrapper).toMatchSnapshot();
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


})
