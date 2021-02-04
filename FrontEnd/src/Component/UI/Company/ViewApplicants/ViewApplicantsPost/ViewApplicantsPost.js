import { Avatar, makeStyles } from "@material-ui/core";
import React from "react";
import "./ViewApplicantsPost.css";
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
const ViewApplicantsPost = ({ name, email, githubId, resumeId }) => {
  const classes = useStyles();
  return (
    <div className="viewApplicantPost">
      <div className="viewApplicants_header">
        <Avatar className={classes.large} />
        <div className="viewApplicants_info">
          <h2>Name - {name} </h2>
          <h3>Email - {email} </h3>
          <h3>
            <a href={"https://" + githubId} target="_blank">
              GitHub Link
            </a>
          </h3>
          <h3>
            <a href={"https://" + resumeId} target="_blank">
              Resume Link
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default ViewApplicantsPost;
