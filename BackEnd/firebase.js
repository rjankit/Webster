const Firebase = () => {
  const firebase = require("firebase");
  const firebaseConfig = {
    apiKey: "AIzaSyCa2GeQxhOShugv_lth2VNR9ouWwpcfjgY",
    authDomain: "login-a1d7e.firebaseapp.com",
    databaseURL: "https://login-a1d7e-default-rtdb.firebaseio.com",
    projectId: "login-a1d7e",
    storageBucket: "login-a1d7e.appspot.com",
    messagingSenderId: "349969056782",
    appId: "1:349969056782:web:88cf0b929e0f0e0fe8e85f",
    measurementId: "G-T8B96YDYX0",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  return firebaseApp;
};
