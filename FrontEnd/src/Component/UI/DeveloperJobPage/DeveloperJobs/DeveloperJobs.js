import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectUser } from "../../../../Store/Userslice/Userslice";
import "./DeveloperJobs.css";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));
const DeveloperJobs = ({ photoUrl, title, company, location, id, status }) => {
  const history = useHistory();
  const classes = useStyles();
  const handleJobClick = (e) => {
    history.push("/job/" + id);
  };
  return (
    <div className="developerJobs" onClick={handleJobClick}>
      <div className="developerJobs_header">
        <Avatar className={classes.large} src={photoUrl} />
        <div className="developerJobs_info">
          <h2>{title}</h2>
          <h3>{company} </h3>
          <h3>{location}</h3>
          <h4>{status}</h4>
        </div>
      </div>
    </div>
  );
};

export default DeveloperJobs;
