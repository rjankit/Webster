import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectUser } from "../../../../../Store/Userslice/Userslice";
import "./NewJobOpening.css";
const NewJobOpening = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  today = dd + "/" + mm + "/" + yyyy;
  const history = useHistory();
  const user = useSelector(selectUser);
  if (!user) {
    alert("Please Login First");
    history.push("/");
  }
  const [job, setJob] = useState({
    title: "",
    company: user.name,
    companyEmail: user.contact,
    location: "",
    postingTime: today,
    description: "",
    role: "",
    requirements: "",
    start_date: "",
    payrange: "",
    status: "open",
    photoUrl: user.photoUrl,
  });
  const handleClick = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/postNewJob", job).then((response) => {
      alert(response.data.message);
      history.push("/companyHome");
    });
  };
  return (
    <div className="newJobOpening">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt=""
      />
      <form>
        <h1>New Job Opening</h1>
        <input
          type="text"
          placeholder="Job Title"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={job.location}
          onChange={(e) => setJob({ ...job, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Job Decription"
          value={job.description}
          onChange={(e) => setJob({ ...job, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Job Role"
          value={job.role}
          onChange={(e) => setJob({ ...job, role: e.target.value })}
        />
        <input
          type="text"
          placeholder="Requirements( Put comma for different requirements)"
          value={job.requirements}
          onChange={(e) => setJob({ ...job, requirements: e.target.value })}
        />
        <input
          type="text"
          placeholder="Preferred Start Date"
          value={job.start_date}
          onChange={(e) => setJob({ ...job, start_date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Pay Range"
          value={job.payrange}
          onChange={(e) => setJob({ ...job, payrange: e.target.value })}
        />
        <button type="submit" onClick={handleClick}>
          Post Job
        </button>
      </form>
    </div>
  );
};

export default NewJobOpening;
