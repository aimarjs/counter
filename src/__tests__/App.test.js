import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';

import App from '../components/App';

// const mockStore = configureMockStore();

import store from '../store/storeConfigure';

describe('App Component', () => {
  it('renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
