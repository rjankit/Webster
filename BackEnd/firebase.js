const axios = require("axios");
const { response } = require("express");
const bodyParser = require("body-parser");
const ankit = {
  name: "Ankit Raj",
  email: "ankit420facebook@gmail.com",
  photoUrl:
    "https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks",
};
axios
  .post("https://login-a1d7e-default-rtdb.firebaseio.com/users.json", ankit)
  .then((response) => {
    console.log(response);
  });
