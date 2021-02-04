import React from "react";
import "./JobPost.css";
import WorkIcon from "@material-ui/icons/Work";
import { useHistory } from "react-router";
const JobPost = ({ id, title, location, company, status }) => {
  //console.log(id);
  const history = useHistory();
  const handleJobPostClick = () => {
    history.push("/job/" + id);
  };

  return (
    <div className="jobPost" onClick={handleJobPostClick}>
      <div className="jobPost_header">
        <WorkIcon fontSize="large" />
        <div className="jobPost_info">
          <h2>{title}</h2>

          <h3>{company}</h3>
          <h3>{location}</h3>
          <h3>Status: {status}</h3>
        </div>
      </div>
    </div>
  );
};
export default JobPost;
