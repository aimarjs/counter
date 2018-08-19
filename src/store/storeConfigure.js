import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './reducers/counterReducer'

const rootReducer = combineReducers({
  counter: counterReducer
})

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(
  rootReducer,
  composeEnhancers
)

// const store = createStore(rootReducer, composeEnhancers);

export default store;
