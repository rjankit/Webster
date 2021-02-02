import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectUser } from "../../../Store/Userslice/Userslice";
import Header from "../Header/Header";
import "./Job.css";
const Job = () => {
  const user = useSelector(selectUser);
  const params = useParams();
  const id = params.id;
  const ankit = ["Data Scientist", "Tester", "Engineer"];
  const [details, setDetails] = useState({
    title: "",
    company: "",
    company_email: "",
    location: "",
    postingTime: "",
    description: "",
    role: "",
    requirements: [],
    start_date: "",
    payrange: "",
    status: "",
  });
  useEffect(() => {
    axios
      .post("http://localhost:5000/getJobDetails", { id: id })
      .then((response) => {
        const temp = response.data.Object;
        const ankit = {
          title: temp.title,
          company: temp.company,
          company_email: temp.company_email,
          location: temp.location,
          postingTime: temp.postingTime,
          description: temp.description,
          role: temp.role,
          requirements: temp.requirements.split(","),
          start_date: temp.start_date,
          payrange: temp.payrange,
          status: temp.status,
        };
        //console.log(ankit.requirements);
        setDetails(ankit);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="job">
        <div className="job_header">
          <img src="https://media-exp1.licdn.com/dms/image/C560BAQE9mv648k-SEQ/company-logo_200_200/0/1596573038658?e=1620259200&v=beta&t=ydXXdyuXiJ8KXkgrWwc1vsYz1J6_Ej_3Y49bsmJmgIg" />
          <div className="job_header_info">
            <h3>{details.title}</h3>
            <h4>{details.company}</h4>
            <h4>{details.location}</h4>
            <h5> {details.postingTime} </h5>
          </div>
          <button>Apply Now</button>
        </div>

        <div className="job_body">
          <div className="job_body_description">
            <h3>Job Description</h3>
            <h4>{details.description}</h4>
          </div>
          <div className="job_body_role">
            <h3>Job Role</h3>
            <h4>{details.role}</h4>
          </div>
        </div>
        <div className="job_bottom">
          <h3>Job Requirements</h3>
          {details.requirements.map((req) => {
            return <li>{req}</li>;
          })}

          <h3>Preferred Start Date - {details.start_date}</h3>
          <p>Pay range - {details.payrange}</p>
        </div>
      </div>
    </div>
  );
};

export default Job;
