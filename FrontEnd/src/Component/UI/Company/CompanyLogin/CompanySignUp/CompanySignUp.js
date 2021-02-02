import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./CompanySignUp.css";
const CompanySignUp = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    photoUrl: "",
    type: "company",
    contact: "",
    location: "",
  });
  const handleSignUp = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/createAccount", user).then((response) => {
      console.log(response.data.message);
      alert(response.data.message);
    });
  };
  const handleLogin = (e) => {
    history.push("/companyLogin");
  };
  return (
    <div className="companySignup">
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
          type="text"
          placeholder="Company Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          type="text"
          placeholder="Company Logo(Optional)"
          value={user.photoUrl}
          onChange={(e) => setUser({ ...user, photoUrl: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact"
          value={user.contact}
          onChange={(e) => setUser({ ...user, contact: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={user.location}
          onChange={(e) => setUser({ ...user, location: e.target.value })}
        />
        <button type="submit" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>

      <p>
        Already registered?{" "}
        <span className="company_login" onClick={handleLogin}>
          Login
        </span>
      </p>
    </div>
  );
};

export default CompanySignUp;
