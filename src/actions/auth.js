import firebase, { googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

export const login = (uid, name, provider) => ({
  type: 'LOGIN',
  uid,
  name,
  provider,
});

export const startGoogleLogin = () => {
  // 'login' is called within 'firebase.auth().onAuthStateChanged' in 'app.js'
  return dispatch => firebase.auth().signInWithPopup(googleAuthProvider);
};

export const startFacebookLogin = () => {
  // 'login' is called within 'firebase.auth().onAuthStateChanged' in 'app.js'
  return dispatch => firebase.auth().signInWithPopup(facebookAuthProvider);
};

export const logout = () => ({
  type: 'LOGOUT',
});

export const startLogout = () => {
  // 'logout' is called within 'firebase.auth().onAuthStateChanged' in 'app.js'
  return dispatch => firebase.auth().signOut();
};
