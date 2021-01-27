import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import BackgroundImage from "../Header/HeaderOptions/bc.jpg";
import RecentItem from "./RecentItem/RecentItem";
const Sidebar = () => {
  const recentItem = (topic) => {};

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={BackgroundImage} alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>UserName</h2>
        <h4 className="sidebar_email">Email</h4>
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
