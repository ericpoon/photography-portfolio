import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import imageDetailReducer from '../reducers/imageDetail';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default () => {
  return createStore(
    combineReducers({
      auth: authReducer,
      imageDetail: imageDetailReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
};
