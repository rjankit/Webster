import { Avatar, Tooltip } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import BackgroundImage from "../Header/HeaderOptions/bc.jpg";
import RecentItem from "./RecentItem/RecentItem";
import { useSelector } from "react-redux";
import { selectUser } from "../../../Store/Userslice/Userslice";
const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic) => {};
  const myavatar =
    user && user.photoUrl !== "" ? (
      <Avatar className="headerOptions_icon" src={user.photoUrl} />
    ) : (
      <Avatar className="headerOptions_icon">{user?.user[0]}</Avatar>
    );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={BackgroundImage} alt="" />
        <Tooltip>{myavatar}</Tooltip>

        <h2>{user ? user.name : ""}</h2>
        <h4 className="sidebar_email">{user ? user.user : ""}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2345</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2345</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        <RecentItem topic="#ReactJs" />
        <RecentItem topic="#College" />
        <RecentItem topic="#Intenrship" />
        <RecentItem topic="#Placement" />
      </div>
    </div>
  );
};

export default Sidebar;
