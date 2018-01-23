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
  return (dispatch, getState) => {
    const loginPageUrl = location.origin;
    if (loginPageUrl && getState().auth.provider === 'google.com') {
      location.assign(`https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${loginPageUrl}`);
    }
    return firebase.auth().signOut();
  };
};
