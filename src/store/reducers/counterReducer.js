import * as actionTypes from '../actions/actionTypes';

const initialState = {
  value: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INC_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };

    case actionTypes.DEC_COUNTER:
      return {
        ...state,
        value: state.value !== 0 ? state.value - 1 : 0,
      };

    case actionTypes.RESET_COUNTER:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
