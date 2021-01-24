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

app.post("/createAccount", (req, res) => {
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
});
