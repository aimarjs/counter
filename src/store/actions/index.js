import * as actionTypes from './actionTypes';

export const addHandler = () => {
  return {
    type: actionTypes.INC_COUNTER
  }
}

export const removeHandler = () => {
  return {
    type: actionTypes.DEC_COUNTER
  }
}

export const resetHandler = () => {
  return {
    type: actionTypes.RESET_COUNTER
  }
}
