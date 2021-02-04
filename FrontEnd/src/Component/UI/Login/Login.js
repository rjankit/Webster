import React from "react";
import "./Login.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { login } from "../../../Store/Userslice/Userslice";
import { withRouter } from "react-router";
const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
    type: "developer",
  });
  const history = useHistory();
  //history.push("/test/12345");
  const register = () => {
    history.push("/signUp");
  };

  const handleForgotPassword = (e) => {
    history.push("/forgotPassword");
  };

  const handleCompanySignUp = (e) => {
    history.push("/companySignup");
  };

  const handleCompanyLogin = (e) => {
    history.push("/companyLogin");
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
            type: "developer",
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
        src="https://cdn.slidesharecdn.com/ss_thumbnails/letterjj-180710190655-thumbnail-4.jpg?cb=1531249722"
        alt=""
      />
      {/*<img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />*/}
      <form>
        <h1>SignIn</h1>
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
        <h3 onClick={handleForgotPassword}>Forgot Password?</h3>
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
      <div className="company">
        <div className="company_login">
          <h2 onClick={handleCompanyLogin}>Company Login</h2>
        </div>

        <div className="company_login">
          <h2 onClick={handleCompanySignUp}>Company SignUp</h2>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
