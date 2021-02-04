import React, { useState } from "react";
import { useHistory } from "react-router";
import "./CompanyLogin.css";
import axios from "axios";

import { useDispatch } from "react-redux";
import { login } from "../../../../Store/Userslice/Userslice";
const CompanyLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
    type: "company",
  });
  const loginCompany = (e) => {
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
            type: "company",
            contact: respnse.data.user.contact,
            location: respnse.data.user.location,
          })
        );
        //console.log("Success");
        history.push("/companyHome");
      }
    });
  };
  const handleSignup = (e) => {
    history.push("/companySignup");
  };

  const handleUserSignup = (e) => {
    history.push("/signUp");
  };
  const hanleUserLogin = (e) => {
    history.push("/");
  };

  const handleForgotPassword = (e) => {
    history.push("/forgotPassword");
  };
  return (
    <div className="companyLogin">
      <img
        src="https://cdn.slidesharecdn.com/ss_thumbnails/letterjj-180710190655-thumbnail-4.jpg?cb=1531249722"
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
        <h3 onClick={handleForgotPassword}>Forgot Password?</h3>
        <button type="submit" onClick={loginCompany}>
          Sign In
        </button>
      </form>
      <p>
        Not registered yet?{" "}
        <span className="company_signup" onClick={handleSignup}>
          SignUp
        </span>
      </p>
      <div className="user">
        <div className="user_login">
          <h2 onClick={hanleUserLogin}>Developer Login</h2>
          <h2 onClick={handleUserSignup}>Developer SignUp</h2>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogin;
