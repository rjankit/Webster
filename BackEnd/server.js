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
const database = firebase.database();
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

const check = ["Hi", "Hello", "Thanks"];

app.post("/startLogin", (req, res) => {
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
    })
    .catch(() => {});
});

app.get("/getPosts", (req, res) => {
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
    .then((response) => {})
    .catch(() => {});
});

app.post("/loginUser", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  var type = req.body.type;
  var found = false;
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
            if (
              response.data[i].email === email &&
              response.data[i].type === type
            ) {
              if (type === "developer") {
                ankit = {
                  email: email,
                  name: response.data[i].name,
                  photoUrl: response.data[i].photoUrl,
                };
              } else {
                ankit = {
                  email: email,
                  name: response.data[i].name,
                  photoUrl: response.data[i].photoUrl,
                  contact: response.data[i].contact,
                  location: response.data[i].location,
                };
              }
              found = true;
              break;
            }
          }
          if (found) res.send({ message: message, user: ankit });
          else res.send({ message: "No such company/developer registered" });
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
  const type = req.body.type;
  var ankit = {};

  if (type === "developer") {
    ankit = {
      email: email,
      name: req.body.name,
      photoUrl: req.body.photoUrl,
      type: req.body.type,
    };
  } else {
    ankit = {
      email: email,
      name: req.body.name,
      password: password,
      photoUrl: req.body.photoUrl,
      contact: req.body.contact,
      location: req.body.location,
      type: req.body.type,
    };
  }
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      axios
        .post(
          "https://login-a1d7e-default-rtdb.firebaseio.com/users.json",
          ankit
        )
        .then((response) => {
          res.send({ message: "success", user: ankit });
        })
        .catch(() => {});
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      res.send({ message: errorMessage });
    });
});

app.post("/resetPassword", (req, res) => {
  //console.log(req.body.email);
  const user = req.body.email;
  firebase
    .auth()
    .sendPasswordResetEmail(user)
    .then(() => {
      res.send({ message: "Link to reset password has been sent to the mail" });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      res.send({ message: errorMessage });
    });
});

app.post("/getJobsForCompany", (req, res) => {
  const email = req.body.user;
  var jobs = [];
  axios
    .get("https://login-a1d7e-default-rtdb.firebaseio.com/jobs.json")
    .then((response) => {
      for (var i in response.data) {
        const a = response.data[i];
        if (response.data[i].companyEmail === email) {
          const temp = {
            id: i,
            company: a.company,
            title: a.title,
            companyEmail: a.companyEmail,
            location: a.location,
            postingTime: a.postingTime,
            description: a.description,
            role: a.role,
            requirements: a.requirements,
            start_date: a.start_date,
            payrange: a.payrange,
            status: a.status,
          };
          jobs.push(temp);
        }
      }
      res.send({ message: "success", Object: jobs });
    })
    .catch(() => {});
});

app.post("/getJobDetails", (req, res) => {
  //console.log(req.body);
  axios
    .get(
      "https://login-a1d7e-default-rtdb.firebaseio.com/jobs/" +
        req.body.id +
        ".json"
    )
    .then((response) => {
      const a = response.data;
      const ankit = {
        id: req.body.id,
        company: a.company,
        title: a.title,
        companyEmail: a.companyEmail,
        location: a.location,
        postingTime: a.postingTime,
        description: a.description,
        role: a.role,
        requirements: a.requirements,
        start_date: a.start_date,
        payrange: a.payrange,
        status: a.status,
      };
      res.send({ message: "success", Object: ankit });
    });
});

app.post("/closeOpening", (req, res) => {
  //console.log(req.body.id);
  database.ref("jobs/" + req.body.id + "/status").set("closed");
  res.send({ message: "success" });
});

app.post("/postNewJob", (req, res) => {
  database.ref("jobs").push().set(req.body);
  res.send({ message: "success" });
});

app.get("/getDeveloperJobs", (req, res) => {
  var jobs = [];
  database.ref("jobs").on("value", (snapshot) => {
    console.log(snapshot.val());
    snapshot.forEach((childSnapshot) => {
      const a = childSnapshot.val();
      const ankit = {
        id: childSnapshot.key,
        photoUrl: a.photoUrl,
        title: a.title,
        company: a.company,
        location: a.location,
        status: a.status,
      };
      jobs.push(ankit);
    });
    console.log(jobs);
    res.send({ message: "success", Object: jobs });
  });
});

app.post("/applyJob", (req, res) => {
  axios
    .post(
      "https://login-a1d7e-default-rtdb.firebaseio.com/applicants/" +
        req.body.id +
        ".json",
      req.body
    )
    .then((response) => {
      res.send({ message: "success" });
    });
});

app.post("/getApplicants", (req, res) => {
  var applicants = [];
  database.ref("applicants/" + req.body.id).on("value", (snapshot) => {
    snapshot.forEach((child) => {
      const a = child.val();
      applicants.push({
        name: a.name,
        email: a.email,
        resumeId: a.resumeId,
        githubId: a.githubId,
      });
    });
  });
  res.send({ message: "success", Object: applicants });
});
