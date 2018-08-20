import shortId from 'shortid';
import * as actionTypes from './actionTypes';

export const addNewEntry = data => ({
  type: actionTypes.ADD_NEW_ENTRY,
  payload: data,
  id: shortId.generate(),
});

export const getAllEntries = () => ({
  type: actionTypes.GET_ALL_ENTRIES,
});

export const addHandler = () => ({
  type: actionTypes.INC_COUNTER,
});

export const removeHandler = () => ({
  type: actionTypes.DEC_COUNTER,
});

export const resetHandler = () => ({
  type: actionTypes.RESET_COUNTER,
});
