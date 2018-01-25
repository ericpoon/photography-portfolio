import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import imagesReducer from '../reducers/images';
import galleryReducer from '../reducers/gallery';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default () => {
  return createStore(
    combineReducers({
      auth: authReducer,
      gallery: galleryReducer,
      images: imagesReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
};
