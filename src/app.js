import 'normalize.css/normalize.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import LoadingPage from './components/pages/LoadingPage';
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
let loggedInWithGoogle = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
store.dispatch(setImages(images));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const { uid, displayName, providerData } = user;
    const { providerId } = providerData[0];
    loggedInWithGoogle = providerId === 'google.com';
    store.dispatch(login(uid, displayName, providerId));

    /* fetch private data and set initial store state here */

    renderApp();
    if (history.location.pathname === '/login') {
      history.push('/admin');
    }
  } else {
    if (loggedInWithGoogle) {
      const loginPageUrl = `${location.origin}/login`;
      location.assign(`https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${loginPageUrl}`);
      loggedInWithGoogle = false;
    }
    store.dispatch(logout());
    renderApp();
    if (history.location.pathname === '/admin') {
      history.push('/');
    }
  }
});

