import React, { useState } from "react";
import "./ForgotPassword.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const ForgotPassword = () => {
  const [user, setUser] = useState({
    email: "",
  });
  const history = useHistory();
  const handleSignup = (e) => {
    history.push("/signUp");
  };

  const handleLogin = () => {
    history.push("/");
  };

  const passwordReset = (e) => {
    e.preventDefault();
    //console.log(user);
    axios.post("http://localhost:5000/resetPassword", user).then((respnse) => {
      alert(respnse.data.message);
      history.push("/");
    });
  };

  return (
    <div className="forgotPassword">
      <img
        src="https://cdn.slidesharecdn.com/ss_thumbnails/letterjj-180710190655-thumbnail-4.jpg?cb=1531249722"
        alt=""
      />
      <form>
        <h1>Password Reset</h1>
        <input
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <button onClick={passwordReset}>Reset Password</button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login_register" onClick={handleSignup}>
          Register Now
        </span>
      </p>

      <p>
        Already a member?{" "}
        <span className="login_register" onClick={handleLogin}>
          Login
        </span>
      </p>
    </div>
  );
};

export default ForgotPassword;
