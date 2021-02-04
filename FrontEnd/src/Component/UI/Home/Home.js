import { Avatar, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Feed from "../Feed/Feed";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";
import { logout, selectUser } from "../../../Store/Userslice/Userslice";
import "./Home.css";
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
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Home = () => {
  const user = useSelector(selectUser);

  const history = useHistory();
  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    history.push("/");
  };
  const classes = useStyles();
  const [display, setDisplay] = useState(false);
  let profile = null;
  if (display)
    profile = (
      <div className="dropdown">
        <div className="dropdown_header">
          <Avatar
            className={classes.large}
            src={user ? (user.photoUrl ? user.photoUrl : "") : ""}
          ></Avatar>
          <div className="dropdown_header_top">
            <h2>{user ? user.name : "User"}</h2>
            <p>Bio</p>
          </div>
        </div>

        <div className="dropdown_middle">
          <h3 onClick={logOutOfApp}>Sign Out</h3>
        </div>
      </div>
    );
  const onProfileClick = () => {
    setDisplay((display) => !display);
  };
  return (
    <div className="Home">
      <Header onProfileClick={onProfileClick} />
      <div className="home_body">
        <Sidebar />
        <Feed />
        {profile}
        <Widgets />
      </div>
    </div>
  );
};

export default Home;
