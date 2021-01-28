import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../Store/Userslice/Userslice";
import "./HeaderOptions.css";
function HeaderOptions({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  const myavatar =
    user && user.photoUrl !== "" ? (
      <Avatar className="headerOptions_icon" src={user.photoUrl} />
    ) : (
      <Avatar className="headerOptions_icon">{user?.user[0]}</Avatar>
    );
  return (
    <div onClick={onClick} className="headerOptions">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && myavatar}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
