import 'normalize.css/normalize.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';
import firebase from './firebase/firebase';
import { setImages } from './actions/images';
import images from './tests/fixtures/images';
import './styles/styles.scss';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

store.dispatch(setImages(images));
renderApp();

// ReactDOM.render(<LoadingPage />, document.getElementById('app'));
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     const { uid, displayName, providerData } = user;
//     store.dispatch(login(uid, displayName, providerData[0].providerId));
//
//     /* fetch data and set initial store state here */
//
//     renderApp();
//     if (history.location.pathname === '/login') {
//       history.push('/admin');
//     }
//   } else {
//     store.dispatch(logout());
//     renderApp();
//     if (history.location.pathname === '/admin') {
//       history.push('/');
//     }
//   }
// });
