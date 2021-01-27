import React from "react";
import "./Login.css";
import { useState } from "react";
import LinkedInIcon from "./1280px-LinkedIn_Logo.svg.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login, logout } from "../../../Store/Userslice/Userslice";
import { withRouter } from "react-router";
const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const register = () => {
    history.push("/signUp");
  };
  const loginToApp = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/loginUser", user).then((respnse) => {
      if (respnse.data.message !== "success") {
        alert(respnse.data.message);
      } else {
        dispatch(
          login({
            user: respnse.data.user.email,
            name: respnse.data.user.name,
            photoUrl: respnse.data.user.photoUrl,
          })
        );
        //console.log("Success");
        history.push("/home");
      }
    });
  };
  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      <form>
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default withRouter(Login);
