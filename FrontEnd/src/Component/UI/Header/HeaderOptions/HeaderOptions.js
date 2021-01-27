import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOptions.css";
function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && <Avatar className="headerOptions_icon" src={avatar} />}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
