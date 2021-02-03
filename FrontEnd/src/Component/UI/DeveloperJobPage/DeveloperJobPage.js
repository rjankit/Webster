import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import "./DeveloperJobPage.css";
import DeveloperJobs from "./DeveloperJobs/DeveloperJobs";
const DeveloperJobPage = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    //console.log("Ankit");
    axios.get("http://localhost:5000/getDeveloperJobs").then((response) => {
      let temp = [];
      for (var i in response.data.Object) {
        const a = response.data.Object[i];
        temp.push({
          id: a.id,
          data: {
            photoUrl: a.photoUrl,
            title: a.title,
            company: a.company,
            location: a.location,
            status: a.status,
          },
        });
      }
      setJobs(temp);
    });
  }, []);
  return (
    <div className="developerJobPage_home">
      <Header />
      <div className="developerJobPage_home_body">
        <Sidebar />
        <div className="developerJobPage_feed">
          {jobs.map(
            ({ id, data: { photoUrl, title, company, location, status } }) => {
              return (
                <DeveloperJobs
                  id={id}
                  photoUrl={photoUrl}
                  title={title}
                  company={company}
                  location={location}
                  status={status}
                />
              );
            }
          )}
        </div>
        <Widgets />
      </div>
    </div>
  );
};

export default DeveloperJobPage;
