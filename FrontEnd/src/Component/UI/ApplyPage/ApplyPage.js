import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { selectUser } from "../../../Store/Userslice/Userslice";
import "./ApplyPage.css";
const ApplyPage = () => {
  const history = useHistory();
  const params = useParams();
  const id = params.id;
  const user = useSelector(selectUser);
  const [details, setDetails] = useState({
    id: id,
    name: user.name,
    email: user.user,
    githubId: "",
    resumeId: "",
  });
  if (!user) return null;
  const handleApply = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/applyJob", details).then((response) => {
      alert("success");
      history.push("/Home");
    });
  };
  return (
    <div className="applyPage">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      <form>
        <input
          placeholder="Github Id"
          value={details.githubId}
          onChange={(e) => setDetails({ ...details, githubId: e.target.value })}
        />
        <input
          placeholder="Resume ID"
          value={details.resumeId}
          onChange={(e) => setDetails({ ...details, resumeId: e.target.value })}
        />
        <button type="submit" onClick={handleApply}>
          Apply
        </button>
      </form>
    </div>
  );
};

export default ApplyPage;
