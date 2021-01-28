import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    photoUrl: "",
  });
  const history = useHistory();
  const handleLogin = () => {
    history.push("/");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(user);
    axios.post("http://localhost:5000/createAccount", user).then((response) => {
      alert(response.data.message);
    });
  };
  return (
    <div className="signup">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />

      <form>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Profile Pic Url(Optional)"
          value={user.photoUrl}
          onChange={(e) => setUser({ ...user, photoUrl: e.target.value })}
        />
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
        <button type="submit" onClick={handleSignup}>
          Sign Up
        </button>
      </form>

      <p>
        Already a member?{" "}
        <span className="login_register" onClick={handleLogin}>
          Login
        </span>
      </p>
    </div>
  );
};

export default SignUp;
