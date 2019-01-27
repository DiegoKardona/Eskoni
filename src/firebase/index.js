import firebase from "firebase";

//Importing redux
import store from "../store/store.js";

const config = {
  apiKey: "AIzaSyDaTYXTwrC-OPKKuD1XSLS3JdkMBOy7WrI",
  authDomain: "e-skoni.firebaseapp.com",
  databaseURL: "https://e-skoni.firebaseio.com",
  projectId: "e-skoni",
  storageBucket: "e-skoni.appspot.com",
  messagingSenderId: "583040333915"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch({
      type: "USER_LOGIN",
      payload: { ...user.providerData[0] }
    });
  } else {
    store.dispatch({ type: "USER_LOGOUT" });
  }
});

const db = firebase.firestore();

export default firebase;
