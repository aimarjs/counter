import * as actionTypes from '../actions/actionTypes';

// const initialState = {
//   value: 0,
//   quantity: 1,
// };

const initialState = {
  entries: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.ADD_NEW_ENTRY:
    //   return {
    //     ...state,
    //     entries: [...state.entries, { id: action.id, value: action.payload.value }],
    //   };
    // case actionTypes.GET_ALL_ENTRIES:
    //   return {
    //     ...state,
    //     entries: [...state.entries],
    //   };
    case actionTypes.INC_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };

    case actionTypes.DEC_COUNTER:
      return {
        ...state,
        quantity: state.value !== 1 ? state.value - 1 : 1,
      };

    case actionTypes.RESET_COUNTER:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
