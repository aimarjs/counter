import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';

const initialState = {
  value: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.INC_COUNTER:
      console.log("STATE", state);
      return {
        ...state,
        value: state.value + 1
      }

    case actionTypes.DEC_COUNTER:

      let newValue

      if (state.value !== 0) {
        newValue = state.value - 1
      } else {
        newValue = 0
      }

      return {
        ...state,
        value: newValue
      }

    case actionTypes.RESET_COUNTER:
      return initialState

    default:
      return state;

  }
}

export default reducer;
