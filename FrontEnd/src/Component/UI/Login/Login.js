import React from "react";
import "./Login.css";
import LinkedInIcon from "./1280px-LinkedIn_Logo.svg.png";
const Login = () => {
  const register = () => {};
  const loginToApp = () => {};
  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      <form>
        <input type="text" placeholder="Name" />

        <input type="text" placeholder="Profile Pic Url(Optional)" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
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

export default Login;
