import configureStore from 'redux-mock-store';

import * as selectActions from '../../store/actions';
import * as actionTypes from '../../store/actions/actionTypes';

const mockStore = configureStore();
const store = mockStore();

describe('Counter Actions', () => {
  beforeEach(() => {
    store.clearActions();
  })

  it('Dispatches action for incrementing counter value', () => {
    const expectedActions = [
      {
        type: actionTypes.INC_COUNTER
      }
    ]

    store.dispatch(selectActions.addHandler())
    expect(store.getActions()).toEqual(expectedActions)

  })

  it('Dispatches action for decrement counter value', () => {
    const expectedActions = [
      {
        type: actionTypes.DEC_COUNTER
      }
    ]

    store.dispatch(selectActions.removeHandler())
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('Dispatches action for resetting counter value', () => {
    const expectedActions = [
      {
        type: actionTypes.RESET_COUNTER
      }
    ]

    store.dispatch(selectActions.resetHandler())
    expect(store.getActions()).toEqual(expectedActions)
  })

})
