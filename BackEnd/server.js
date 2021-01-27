// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

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
const admin = require("firebase-admin");

const serviceAccount = require("./service_account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://login-a1d7e-default-rtdb.firebaseio.com",
});

const db = admin.firestore();

const express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors");
const axios = require("axios");
const { response } = require("express");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

app.post("/startLogin", (req, res) => {
  console.log(req.body);
  axios
    .get("https://login-a1d7e-default-rtdb.firebaseio.com/login.json")
    .then((response) => {
      var ab = true;
      for (var i in response.data) {
        if (
          req.body["email"] === response.data[i].email &&
          req.body["password"] === response.data[i].password &&
          req.body.type === response.data[i].type
        ) {
          res.send({ message: "Login Successfull" });
          ab = false;
          break;
        }
      }
      if (ab) {
        res.send({ message: "Login Unsuccessfull" });
      }
    });
});

/*app.post("/createAccount", (req, res) => {
  var valid = true;
  axios
    .get("https://login-a1d7e-default-rtdb.firebaseio.com/login.json")
    .then((response) => {
      for (var i in response.data) {
        if (req.body.email === response.data[i].email) {
          valid = false;
          break;
        }
      }
      if (!valid) {
        res.send({ message: "Email id is either not valid or already in use" });
      } else {
        axios
          .post(
            "https://login-a1d7e-default-rtdb.firebaseio.com/login.json",
            req.body
          )
          .then((response) => {
            if (response["status"] === 200) {
              res.send({ message: "Success" });
            } else {
              res.send({ message: "Some error occured" });
            }
          });
      }
    });
});*/

app.get("/getPosts", (req, res) => {
  /*db.collection("posts").onSnapshot((snapshot) => {
    const ankit = snapshot.docs.map((doc) => {
      return Object.assign(doc.data(), { id: doc.id });
    });
    console.log(ankit);
    res.send({ message: "Hello Ankit", Object: ankit });
  });*/
  axios
    .get("https://login-a1d7e-default-rtdb.firebaseio.com/posts.json")
    .then((response) => {
      res.send({ Object: response.data });
    });
});

app.post("/sendPosts", (req, res) => {
  axios
    .post(
      "https://login-a1d7e-default-rtdb.firebaseio.com/posts.json",
      req.body
    )
    .then((response) => {
      //console.log(response);
    });
  /*db.collection("posts").add({
    name: req.body.name,
    description: "Hello Ankit",
    message: req.body.message,
    photoUrl: "",
    timestamp: " ",
  });*/
});

app.post("/loginUser", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  //console.log(email);
  var message = "Success";
  var ankit = {};
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      message = "success";
      axios
        .get("https://login-a1d7e-default-rtdb.firebaseio.com/users.json")
        .then((response) => {
          for (var i in response.data) {
            if (response.data[i].email === email) {
              ankit = {
                email: email,
                name: response.data[i].name,
                photoUrl: response.data[i].photoUrl,
              };
              res.send({ message: message, user: ankit });
              break;
            }
          }
        });
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message = errorMessage;
      res.send({ message: message });
    });
});

app.post("/createAccount", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const ankit = {
    email: email,
    name: req.body.name,
    photoUrl: req.body.photoUrl,
  };
  //console.log(email);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      //console.log(email);
      //console.log(password);
      axios
        .post(
          "https://login-a1d7e-default-rtdb.firebaseio.com/users.json",
          ankit
        )
        .then((response) => {
          res.send({ message: "success", user: ankit });
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      res.send({ message: errorMessage });
    });
});
