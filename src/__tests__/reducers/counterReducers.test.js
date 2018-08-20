import selectReducer from '../../store/reducers/counterReducer';
import * as actionTypes from '../../store/actions/actionTypes';

describe('Counter Reducer', () => {
  describe('Initial State', () => {
    it('is correct', () => {
      const action = { type: 'dummy_reducer' };
      const initialState = { value: 0 };

      expect(selectReducer(undefined, action)).toEqual(initialState);
    });
  });

  describe('INC_COUNTER', () => {
    it('returns the correct state', () => {
      const action = { type: actionTypes.INC_COUNTER };
      const expectedState = { value: 1 };

      expect(selectReducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('DEC_COUNTER', () => {
    it('returns the correct state', () => {
      const action = { type: actionTypes.DEC_COUNTER };
      const expectedState = { value: 0 };

      expect(selectReducer(undefined, action)).toEqual(expectedState);
    });

    it('doesnt go to minus', () => {
      const action = { type: actionTypes.DEC_COUNTER };
      const expectedState = { value: -1 };

      expect(selectReducer(undefined, action)).not.toBe(expectedState);
    });
  });

  describe('RESET_COUNTER', () => {
    it('returns the initialState', () => {
      const action = { type: actionTypes.RESET_COUNTER };
      const expectedState = { value: 0 };

      expect(selectReducer(undefined, action)).toEqual(expectedState);
    });
  });
});
