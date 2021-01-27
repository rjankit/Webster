import React from "react";
import "./RecentItem.css";
const RecentItem = ({ topic }) => {
  return (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash"></span>
      <p>{topic}</p>
    </div>
  );
};

export default RecentItem;
