import React, { useState } from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Maker from "../../../assets/logo.svg";
import { Link, Route, useHistory } from "react-router-dom";
import axios from "axios";
const LoginForm = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const history = useHistory();
  const handleClick = (event) => {
    event.preventDefault();
    console.log(details);
    axios.post("http://localhost:5000/startLogin", details).then((response) => {
      if (response.data && response.data["message"] === "Login Successfull") {
        history.push("/user");
      } else {
        //alert('Wrong email of password');
      }
    });
  };
  const handleSignUpClick = () => {
    history.push("/signUp");
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                className="FontAweSomeIcon"
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
                value={details.email}
              />{" "}
            </div>
            <div className="input-field">
              <FontAwesomeIcon
                icon={faLock}
                size="lg"
                className="FontAweSomeIcon"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>
            <button className="btn solid" onClick={handleClick}>
              Login{" "}
            </button>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h1>New here ?</h1>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src={Maker} className="ImageSize"></img>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
