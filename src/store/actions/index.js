import * as actionTypes from './actionTypes';

export const addHandler = () => ({
  type: actionTypes.INC_COUNTER,
});

export const removeHandler = () => ({
  type: actionTypes.DEC_COUNTER,
});

export const resetHandler = () => ({
  type: actionTypes.RESET_COUNTER,
});
