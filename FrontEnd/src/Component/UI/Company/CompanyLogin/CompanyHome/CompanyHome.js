import React, { useEffect, useState } from "react";
import JobPost from "../JobPost/JobPost";
import "./CompanyHome.css";

import { useSelector } from "react-redux";
import axios from "axios";
import { selectUser } from "../../../../../Store/Userslice/Userslice";
const CompanyHome = () => {
  const user = useSelector(selectUser);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:5000/getJobsForCompany", user)
      .then((response) => {
        var temp = [];
        for (let i in response.data.Object) {
          temp.push({
            id: response.data.Object[i].id,
            data: {
              title: response.data.Object[i].title,
              location: response.data.Object[i].location,
              status: response.data.Object[i].status,
            },
          });
        }
        setJobs(temp);
      });
  }, []);

  return (
    <div className="companyHome">
      <div className="companyHome_header_parent">
        <div className="companyHome_header">
          <div className="companyHome_header_image">
            <img src="https://media-exp1.licdn.com/dms/image/C561BAQFOpXunAwewCA/company-background_10000/0/1602702874262?e=1612342800&v=beta&t=tkT2V2a2peOn1CXa3MX2MJgjfBS_h9iMMxLIa_XR6yM" />
          </div>
          <div className="companyHome_header_middle">
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQE9mv648k-SEQ/company-logo_200_200/0/1596573038658?e=1620259200&v=beta&t=ydXXdyuXiJ8KXkgrWwc1vsYz1J6_Ej_3Y49bsmJmgIg" />
            <div className="companyHome_name">
              <h2>Name</h2>
              <h3>Location</h3>
            </div>
            <button>Open a job</button>
          </div>
        </div>

        {jobs.map(({ id, data: { title, location, status } }) => {
          return (
            <JobPost
              id={id}
              title={title}
              location={location}
              status={status}
            />
          );
        })}
        <JobPost
          id="12345"
          title="Title"
          location="Motihari"
          company="Cisco"
          status="closed"
        />
      </div>

      <div className="companyHome_header_middle"></div>
    </div>
  );
};

export default CompanyHome;
